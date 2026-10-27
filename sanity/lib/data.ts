import {
  productCategories as localProductCategories,
  type ProductCategory,
} from "@/lib/products";
import { site } from "@/lib/site";
import { client } from "./client";
import {
  productCategoriesQuery,
  productsQuery,
  scheduleQuery,
} from "./queries";

type SanityCategory = {
  id: string;
  name: string;
  description: string;
};

type SanityProduct = {
  name: string;
  description: string | null;
  image: string | null;
  categoryId: string;
};

type SanitySchedule = {
  days: string;
  openingTime: string;
  closingTime: string;
  note: string | null;
};

export type ScheduleItem = {
  days: string;
  hours: string;
  note?: string;
};

const fallbackProductImage = "/images/hero-pan.jpg";

export async function getProductCategories(): Promise<ProductCategory[]> {
  if (!client) {
    return localProductCategories;
  }

  try {
    const [categories, products] = await Promise.all([
      client.fetch<SanityCategory[]>(productCategoriesQuery),
      client.fetch<SanityProduct[]>(productsQuery),
    ]);

    if (!categories.length || !products.length) {
      return localProductCategories;
    }

    const categoriesWithProducts = categories
      .map((category) => ({
        id: category.id,
        name: category.name,
        description: category.description,
        products: products
          .filter(
            (product) =>
              product.categoryId === category.id && product.name.length > 0,
          )
          .map((product) => ({
            name: product.name,
            description: product.description ?? "",
            image: product.image ?? fallbackProductImage,
          })),
      }))
      .filter((category) => category.products.length > 0);

    return categoriesWithProducts.length > 0
      ? categoriesWithProducts
      : localProductCategories;
  } catch {
    return localProductCategories;
  }
}

export async function getSchedule(): Promise<ScheduleItem[]> {
  if (!client) {
    return site.schedule;
  }

  try {
    const schedule = await client.fetch<SanitySchedule[]>(scheduleQuery);

    const items = schedule
      .filter(
        (item) => item.days && item.openingTime && item.closingTime,
      )
      .map((item) => ({
        days: item.days,
        hours: `${item.openingTime} – ${item.closingTime}`,
        note: item.note?.trim() || undefined,
      }));

    return items.length > 0 ? items : site.schedule;
  } catch {
    return site.schedule;
  }
}
