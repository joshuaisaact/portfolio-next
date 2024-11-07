import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-8">
        <article className="border-b pb-8">
          <Link href="/blog/dancing-in-dark" className="group">
            <Image
              src="/images/blog/driving-portfolio.png"
              alt="Portfolio design concept"
              width={800}
              height={400}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-500">
              Dancing in the Dark (Designing A Portfolio Site)
            </h2>
            <p className="text-gray-400 mb-4">August 19, 2024</p>
            <p>
              My first ever article! My design philosophy for this portfolio.
            </p>
          </Link>
        </article>
      </div>
    </div>
  );
}
