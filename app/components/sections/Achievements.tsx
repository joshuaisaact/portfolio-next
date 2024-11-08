"use client";

import { ACHIEVEMENTS } from "@/lib/constants/achievementConstants";
import { AchievementCard } from "../ui/cards/AchievementCard";

export function Achievements() {
  return (
    <>
      <div className="grid grid-cols-1  gap-8">
        {ACHIEVEMENTS.map((achievement) => (
          <AchievementCard key={achievement.slug} achievement={achievement} />
        ))}
      </div>
    </>
  );
}
