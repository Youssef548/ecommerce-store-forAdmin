"use client";

import Modal from "@/components//ui/modal";
import usePreviewModal from "@/hooks/user-preview-modal";
import Info from "@/components/info";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

// Modal-specific Gallery Tab component
const ModalGalleryTab = ({ image }: { image: ImageType }) => {
  return (
    <Tab
      className="relative flex-shrink-0 aspect-square cursor-pointer
  items-center justify-center rounded-md bg-white w-16 h-16 sm:w-20 sm:h-20 border-2 border-transparent hover:border-gray-300 transition-colors"
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

// Modal-specific Gallery component
const ModalGallery = ({ images }: { images: ImageType[] }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="flex space-x-4 overflow-x-auto">
          {images.map(image => (
            <ModalGalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map(image => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal(state => state.product);

  if (!product) return null;

  return (
    <Modal onClose={previewModal.onClose} isOpen={previewModal.isOpen}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-5 lg:col-span-6">
          <ModalGallery images={product.images} />
        </div>
        <div className="sm:col-span-7 lg:col-span-6">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
