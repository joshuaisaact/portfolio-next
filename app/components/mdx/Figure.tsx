import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  title?: string;
}

export function Figure({ src, alt, title }: FigureProps) {
  return (
    <figure className="my-8 flex flex-col items-center">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={200}
        className="rounded-lg"
      />
      {title && (
        <figcaption className="text-center text-sm text-gray-400 mt-2 italic">
          {title}
        </figcaption>
      )}
    </figure>
  );
}
