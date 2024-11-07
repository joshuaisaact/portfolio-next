import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  title?: string;
}

export function Figure({ src, alt, title }: FigureProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="w-full rounded-lg"
      />
      {title && (
        <figcaption className="text-center text-sm text-gray-400 mt-2 italic">
          {title}
        </figcaption>
      )}
    </figure>
  );
}
