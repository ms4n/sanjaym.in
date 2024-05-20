"use client";

import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

const technologies = [
  "next.js",
  "express.js",
  "supabase",
  "aws",
  "whatsapp",
  "facebook",
  "google apis",
];

const Card = () => {
  return (
    <div className="block backdrop-blur-sm bg-white/10 max-w-80 md:max-w-lg p-6 border border-gray-100/20 rounded-lg shadow">
      <h5 className="mb-2 text-base font-satoshib tracking-tight text-gray-900 dark:text-white">
        Project Name
      </h5>
      <div className="flex text-sm gap-2 mb-2 items-center text-center overflow-x-auto scrollbar-hide">
        {technologies.map((tech) => (
          <p
            key={tech}
            className="chip text-zinc-300 backdrop-blur-sm bg-white/10 px-2 py-1 rounded-full whitespace-nowrap"
          >
            {tech}
          </p>
        ))}
      </div>
      <p className="text-gray-700 font-satoshim text-sm tracking-tight leading-tight dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order. Here are the biggest enterprise
        technology acquisitions of 2021 so far.
      </p>

      <div className="flex justify-between text-zinc-400 underline text-sm font-satoshim mt-4">
        <Link
          className="flex justify-center items-center gap-2"
          href="www.google.com"
        >
          view live <SquareArrowOutUpRight size={14} />
        </Link>
        <Link className="flex items-center gap-2" href="www.google.com">
          source code on github <SquareArrowOutUpRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
