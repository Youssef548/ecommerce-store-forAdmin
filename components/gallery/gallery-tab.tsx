"use client";
import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab
      className="relative aspect-square cursor-pointer
  items-center justify-center rounded-md bg-white border-2 border-transparent hover:border-gray-300 transition-colors"
    >
      {({ selected }) => (
        <div className="w-full h-full">
          <span
            className="absolute h-full w-full aspect-square
                inset-0 overflow-hidden rounded-md"
          >
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute h-full w-full aspect-square inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
