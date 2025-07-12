import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_URL}/products`;

interface QueryParams {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export const getProducts = async (query: QueryParams): Promise<Product[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        ...query,
      },
    });

    if (!URL) {
      throw new Error("NEXT_PUBLIC_URL is not defined");
    }

    const res = await fetch(`${url}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch prodcuts");
    }

    return res.json();
  } catch (error) {
    let message = "An error occurred while fetching prodcuts";
    if (error instanceof Error) message = error.message;
    console.error(error);
    console.error(message);
    return [];
  }
};
