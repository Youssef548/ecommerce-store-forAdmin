import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_URL}/categories`;

export const getCategory = async (
  categoryId: string
): Promise<Category | null> => {
  try {
    if (!URL) {
      throw new Error("NEXT_PUBLIC_URL is not defined");
    }

    const res = await fetch(`${URL}/${categoryId}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch category");
    }

    return res.json();
  } catch (error) {
    let message = "An error occurred while fetching category";
    if (error instanceof Error) message = error.message;
    console.error(error);
    console.error(message);
    return null;
  }
};
