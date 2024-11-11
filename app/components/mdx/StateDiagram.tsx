"use client";

import Image from "next/image";

interface StateDiagramProps {
  src: string;
  alt: string;
  title?: string;
}

export function StateDiagram({ src, alt, title }: StateDiagramProps) {
  const handleClick = () => {
    window.open(src, "_blank");
  };

  return (
    <figure className="my-8 flex flex-col items-center">
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={600}
        className="rounded-lg md:w-[800px] cursor-pointer"
        onClick={handleClick}
      />
      {title && (
        <figcaption className="text-center text-sm text-gray-400 mt-2 italic">
          {title}
        </figcaption>
      )}
    </figure>
  );
}
