import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_URL}/colors`;

export const getColors = async (): Promise<Color[]> => {
  try {
    if (!URL) {
      throw new Error("NEXT_PUBLIC_URL is not defined");
    }

    const res = await fetch(`${URL}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch colors");
    }

    return res.json();
  } catch (error) {
    let message = "An error occurred while fetching colors";
    if (error instanceof Error) message = error.message;
    console.error(error);
    console.error(message);
    return [];
  }
};
