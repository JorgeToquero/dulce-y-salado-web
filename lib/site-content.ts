import { cache } from "react";
import { site } from "@/lib/site";
import {
  getSchedule,
  getSiteSettings,
  type ScheduleItem,
} from "@/sanity/lib/data";

export type SiteContact = {
  phone: string | null;
  phoneHref: string | null;
  whatsappHref: string | null;
  address: string;
  contactEmail: string | null;
  generalSchedule: string | null;
};

function toInternationalDigits(digits: string) {
  return /^[6789]\d{8}$/.test(digits) ? `34${digits}` : digits;
}

function normalizePhone(value: string | null | undefined) {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  const withoutPrefix = trimmed.replace(/^tel:/i, "").trim();
  if (!/^[+\d\s().-]+$/.test(withoutPrefix)) {
    return null;
  }

  const digits = withoutPrefix.replace(/\D/g, "");
  const withoutTrunkPrefix = digits.startsWith("00") ? digits.slice(2) : digits;
  const normalizedDigits = toInternationalDigits(withoutTrunkPrefix);
  if (
    normalizedDigits.length < 9 ||
    normalizedDigits.length > 15 ||
    /^0+$/.test(normalizedDigits)
  ) {
    return null;
  }

  return { display: withoutPrefix, digits: normalizedDigits };
}

function normalizeWhatsApp(value: string | null | undefined) {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  let candidate = trimmed;
  if (/^https?:\/\//i.test(trimmed)) {
    try {
      const url = new URL(trimmed);
      candidate = url.searchParams.get("phone") ?? url.pathname;
    } catch {
      return null;
    }
  }

  const digits = candidate.replace(/\D/g, "");
  const withoutTrunkPrefix = digits.startsWith("00") ? digits.slice(2) : digits;
  const normalizedDigits = toInternationalDigits(withoutTrunkPrefix);
  if (
    normalizedDigits.length < 9 ||
    normalizedDigits.length > 15 ||
    /^0+$/.test(normalizedDigits)
  ) {
    return null;
  }

  return `https://wa.me/${normalizedDigits}`;
}

export const getSiteContact = cache(async (): Promise<SiteContact> => {
  const settings = await getSiteSettings();
  const phone = normalizePhone(settings?.phone);

  return {
    phone: phone?.display ?? null,
    phoneHref: phone ? `tel:+${phone.digits}` : null,
    whatsappHref: normalizeWhatsApp(settings?.whatsapp),
    address: settings?.address?.trim() || site.address,
    contactEmail: settings?.contactEmail?.trim() || null,
    generalSchedule: settings?.generalSchedule?.trim() || null,
  };
});

export const getSiteSchedule = cache(async (): Promise<ScheduleItem[]> => {
  return getSchedule();
});
