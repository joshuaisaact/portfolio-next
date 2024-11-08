import Image from "next/image";
import { Achievement } from "@/types";
import { Card, CardImage, CardContent } from "./Card";
import Link from "next/link";

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <Link
      href={`/projects/${achievement.slug}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <Card className=" hover:-translate-y-0.5 hover:shadow-md">
        <CardImage
          src={achievement.videoSrc || achievement.imageSrc}
          alt={achievement.imageAlt}
          video={!!achievement.videoSrc}
        />
        <CardContent>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {achievement.title}
          </h3>

          <ul className="flex justify-center gap-4 mb-4">
            {achievement.skills.map((skill) => (
              <li key={skill}>
                <Image
                  src={`/media/skills/${skill.toLowerCase()}.svg`}
                  alt={skill}
                  width={30}
                  height={30}
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  aria-label={skill}
                  title={skill}
                />
              </li>
            ))}
          </ul>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {achievement.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
