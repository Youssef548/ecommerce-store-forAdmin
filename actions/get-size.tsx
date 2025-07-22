import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_URL}/sizes`;

export const getSize = async (sizeId: string): Promise<Size | null> => {
  try {
    if (!URL) {
      throw new Error("NEXT_PUBLIC_URL is not defined");
    }

    const res = await fetch(`${URL}/${sizeId}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch size");
    }

    return res.json();
  } catch (error) {
    let message = "An error occurred while fetching size";
    if (error instanceof Error) message = error.message;
    console.error(error);
    console.error(message);
    return null;
  }
};
