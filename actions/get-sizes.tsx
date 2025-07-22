import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_URL}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  try {
    if (!URL) {
      throw new Error("NEXT_PUBLIC_URL is not defined");
    }

    const res = await fetch(`${URL}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch sizes");
    }

    return res.json();
  } catch (error) {
    let message = "An error occurred while fetching sizes";
    if (error instanceof Error) message = error.message;
    console.error(error);
    console.error(message);
    return [];
  }
};
