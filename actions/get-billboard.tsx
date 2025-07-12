import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard | null> => {
  try {
    if (!URL) {
      throw new Error("NEXT_PUBLIC_URL is not defined");
    }

    const res = await fetch(`${URL}/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch billboard");
    }

    return res.json();
  } catch (error) {
    let message = "An error occurred while fetching billboard";
    if (error instanceof Error) message = error.message;
    console.error(error);
    console.error(message);
    return null;
  }
};
