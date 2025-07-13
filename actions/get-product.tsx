import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_URL}/products`;

export const getProduct = async (
  productId: string
): Promise<Product | null> => {
  try {
    const url = `${URL}/${productId}`;

    if (!URL) {
      throw new Error("NEXT_PUBLIC_URL is not defined");
    }

    const res = await fetch(`${url}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  } catch (error) {
    let message = "An error occurred while fetching product";
    if (error instanceof Error) message = error.message;
    console.error(error);
    console.error(message);
    return null;
  }
};
