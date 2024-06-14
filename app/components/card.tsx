"use client";

import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

interface CardProps {
  title: string;
  technologies: string[];
  description: string;
  liveLink: string;
  sourceLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  technologies,
  description,
  liveLink,
  sourceLink,
}) => {
  return (
    <div className="block backdrop-blur-sm bg-white/10 max-w-80 md:max-w-lg p-6 ring-1 ring-inset ring-gray-500/10 shadow-inner rounded-lg">
      <h5 className="mb-2 text-base md:text-lg font-satoshib tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <div className="flex text-sm md:text-base gap-2 mb-3 items-center text-center overflow-x-auto scrollbar-hide">
        {technologies.map((tech) => (
          <p
            key={tech}
            className="inline-flex whitespace-nowrap items-center rounded-md bg-gray-50/20 px-2 py-1 text-xs md:text-sm text-zinc-300 backdrop-blur-sm ring-1 ring-inset ring-gray-500/10"
          >
            {tech}
          </p>
        ))}
      </div>
      <p className="text-gray-700 font-satoshim text-sm md:text-base tracking-tight leading-tight md:leading-tight dark:text-gray-400">
        {description}
      </p>

      <div className="flex justify-between text-zinc-400 underline text-sm md:text-base font-satoshim mt-4">
        <Link
          className="flex justify-center items-center gap-2"
          href={liveLink}
        >
          view live <SquareArrowOutUpRight size={15} />
        </Link>
        <Link className="flex items-center gap-2" href={sourceLink}>
          source code on github <SquareArrowOutUpRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
