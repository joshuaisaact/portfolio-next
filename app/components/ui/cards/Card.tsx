import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        group
        relative overflow-hidden
        bg-gradient-to-b from-white to-gray-50
        dark:from-gray-800 dark:to-gray-850
        rounded-lg shadow-sm
        ring-1 ring-gray-900/[0.05]
        transition-all duration-300
        hover:shadow-md hover:-translate-y-0.5
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  video?: boolean;
}

export function CardImage({ src, alt, video }: CardImageProps) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden">
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
          <source src={src.replace(".mp4", ".webm")} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-6">{children}</div>;
}
