import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
}

export function Card({ children, className = "", role }: CardProps) {
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
      role={role}
    >
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  video?: boolean;
  className?: string;
  containerClassName?: string;
  posterImage?: string;
}

export function CardImage({
  src,
  alt,
  video,
  className = "",
  containerClassName = "",
  posterImage,
}: CardImageProps) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 ${containerClassName}`}
    >
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover ${className}`}
          preload="none"
          poster={posterImage}
        >
          <source src={src.replace(".mp4", ".webm")} type="video/webm" />
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className={` transition-transform duration-300 group-hover:scale-105 ${className}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      )}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-4 sm:p-6 ${className}`}>{children}</div>;
}
