"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import { SquareArrowOutUpRight, Copy } from "lucide-react";

import Particles from "./components/particles";
import Card from "./components/card";

const links = [
  { text: "github", href: "www.google.com" },
  { text: "linkedin", href: "www.google.com" },
  { text: "resume", href: "www.google.com" },
];

export default function Home() {
  const [gradientColor, setGradientColor] = useState("bg-blue-600");
  const [isColorSelectOpen, setIsColorSelectOpen] = useState(false);
  const [gradient, setGradient] = useState("via-blue-600/20");

  const colorGradients: { [key: string]: string } = {
    "bg-red-600": "via-red-600/20",
    "bg-green-600": "via-green-600/20",
    "bg-orange-600": "via-orange-600/20",
    "bg-teal-600": "via-teal-600/20",
    "bg-blue-600": "via-blue-600/20",
  };

  const handleColorSelector = () => {
    setIsColorSelectOpen(!isColorSelectOpen);
  };

  const handleColorChange = (color: string) => {
    setGradientColor(color);
    setGradient(colorGradients[color]);
    setIsColorSelectOpen(false);
  };

  return (
    <div
      className={`flex flex-col main px-10 w-full h-full justify-center overflow-hidden bg-gradient-to-tl from-black ${gradient} to-black`}
    >
      <div className="md:container mx-auto md:my-5">
        <nav className="flex items-center justify-between animate-fade-i">
          <div>
            <p className="text-lg font-playfair text-zinc-200">Sanjay M</p>
            <p className="text-xs font-satoshim leading-none tracking-tight text-zinc-500">
              Bengaluru, India
            </p>
          </div>

          <div className="block flex gap-2 items-center justify-center backdrop-blur-sm h-full bg-white/10 p-2 border border-gray-100/20 rounded-full shadow transition">
            {isColorSelectOpen ? (
              Object.keys(colorGradients).map((color, index) => (
                <button
                  key={index}
                  onClick={() => handleColorChange(color)}
                  className={`w-5 h-5 border border-gray-100/20 rounded-full ${color}`}
                ></button>
              ))
            ) : (
              <button
                onClick={handleColorSelector}
                className={`w-5 h-5 border border-gray-100/20 rounded-full ${gradientColor}`}
              ></button>
            )}
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
              I&apos;m Sanjay, a backend-focused fullstack developer{" "}
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
              <div className="flex gap-4 ">
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

        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-zinc-200 text-base font-satoshim">Projects</h1>

          <Card />
        </div>
      </div>
    </div>
  );
}
