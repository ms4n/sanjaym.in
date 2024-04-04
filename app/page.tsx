import Link from "next/link";
import Image from "next/image";

import { SquareArrowOutUpRight, Copy } from "lucide-react";

import Particles from "./components/particles";

const links = [
  { text: "github", href: "www.google.com" },
  { text: "resume", href: "www.google.com" },
];

export default function Home() {
  return (
    <div className="flex flex-col px-10 w-screen h-screen m-auto overflow-hidden bg-gradient-to-tl from-black via-blue-600/20 to-black">
      <div className="md:container mx-auto md:my-5">
        <nav className="flex justify-between pt-10 animate-fade-i">
          <div>
            <p className="text-lg font-playfair text-zinc-200">Sanjay M</p>
            <p className="text-xs font-satoshim leading-none tracking-tight text-zinc-500">
              Bengaluru, India
            </p>
          </div>
        </nav>
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />

        <div className="my-10 animate-fade-inn">
          <h2 className="text-sm font-satoshim text-zinc-400 ">
            Hi,{" "}
            <span className="text-zinc-200">
              I'm Sanjay, a backend-focused fullstack developer{" "}
            </span>{" "}
            with a flair for design. I partner with ambitious teams to bring
            their visions to life, unbounded by frameworks or languages.
          </h2>

          <div className="flex items-center gap-4 mt-8">
            <Image
              className=" rounded-full"
              src={"/images/sanjay_m.png"}
              width={60}
              height={60}
              alt="sanjay-m circle image"
            ></Image>

            <div className="flex flex-col gap-3 underline text-zinc-400 text-sm font-satoshim">
              <div className="flex gap-5">
                {links.map((link, index) => (
                  <Link
                    className="flex items-center gap-2"
                    key={index}
                    href={link.href}
                  >
                    {link.text} <SquareArrowOutUpRight size={14} />
                  </Link>
                ))}
              </div>
              <a className="flex items-center gap-2">
                work.sanjaym@gmail.com <Copy size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex">
          <h1 className="text-blue-300 text-base font-satoshim">Projects</h1>
        </div>
      </div>
    </div>
  );
}
