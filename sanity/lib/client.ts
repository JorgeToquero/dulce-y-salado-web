import { createClient } from "next-sanity";
import {
  apiVersion,
  dataset,
  isSanityConfigured,
  projectId,
} from "@/sanity/env";

const readToken = process.env.SANITY_API_READ_TOKEN || undefined;

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      token: readToken,
      useCdn: !readToken,
      perspective: "published",
    })
  : null;
