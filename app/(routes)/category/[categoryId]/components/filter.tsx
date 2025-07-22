"use client";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import qs from "query-string";

interface FilterProps {
  data: (Size | Color)[];
  valueKey: string;
  name: string;
}

const Filter = ({ valueKey, name, data }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const stringId = String(id);

    const query = { ...current, [valueKey]: stringId };

    if (current[valueKey] === stringId) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.pathname,
        query,
      },
      { skipNull: true }
    );
    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="my-4">
        <div className="flex flex-wrap gap-2">
          {data.map((filter: Size | Color) => (
            <div key={filter.id} className="flex items-center">
              <Button
                className={cn(
                  "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                  selectedValue === String(filter.id) && "bg-black text-white"
                )}
                onClick={() => onClick(filter.id)}
              >
                {filter.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
