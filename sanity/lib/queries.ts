export const productCategoriesQuery = `
  *[_type == "category" && defined(slug.current)] | order(coalesce(order, 999) asc, name asc) {
    "id": slug.current,
    name,
    description
  }
`;

export const productsQuery = `
  *[
    _type == "product" &&
    available == true &&
    defined(category->slug.current)
  ] | order(coalesce(order, 999) asc, name asc) {
    name,
    "description": shortDescription,
    "image": image.asset->url,
    "categoryId": category->slug.current
  }
`;

export const scheduleQuery = `
  *[_type == "schedule"] | order(coalesce(order, 999) asc, days asc) {
    days,
    openingTime,
    closingTime,
    note
  }
`;

export const siteSettingsQuery = `
  *[_type == "siteSettings"] | order(_updatedAt desc)[0] {
    phone,
    whatsapp,
    address,
    contactEmail,
    generalSchedule
  }
`;
