"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";

import {
  SquareArrowOutUpRight,
  Copy,
  CheckCheck,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

import Particles from "./components/particles";
import Card from "./components/card";

const links = [
  { text: "github", href: "www.google.com" },
  { text: "linkedin", href: "www.google.com" },
  { text: "resume", href: "www.google.com" },
];

export default function Home() {
  const [copyStatus, setCopyStatus] = useState(false);

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

  const onCopyEmail = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  const handleCopyClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const text = (e.currentTarget.textContent as string).trim();
    try {
      await navigator.clipboard.writeText(text);
      onCopyEmail();
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      className={`flex flex-col main h-full w-full justify-center md:pt-32 overflow-hidden bg-gradient-to-tl from-black ${gradient} to-black`}
    >
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <div className="md:flex justify-around md:container md:mx-auto">
        <div className="px-10 max-w-3xl">
          <nav className="flex items-center justify-between animate-fade-i">
            <div>
              <p className="text-lg font-playfair text-zinc-200">Sanjay M</p>
              <p className="text-xs font-satoshim leading-none tracking-tight text-zinc-500">
                Bengaluru, India
              </p>
            </div>

            <div className="block flex gap-3 items-center justify-center backdrop-blur-sm bg-white/10 p-2 border border-gray-100/20 rounded-full shadow">
              {isColorSelectOpen ? (
                Object.keys(colorGradients).map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorChange(color)}
                    className={`w-6 h-6 border border-gray-100/20 rounded-full ${color}`}
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

          <div className="my-10 md:max-w-lg">
            <h2 className="text-sm font-satoshim text-zinc-400">
              Hi,{" "}
              <span className="text-zinc-200">
                I&apos;m Sanjay, a backend-focused fullstack developer{" "}
              </span>{" "}
              with a flair for design. I partner with ambitious teams to bring
              their visions to life.
              <p className="mt-4">
                Although I&apos;m unbounded by frameworks or languages, my go-to
                stack for building is{" "}
                <span className="text-zinc-200">
                  Python with Django/FastAPI and Node.js with
                  TypeScript/Express.js/React/Next.js,
                </span>{" "}
                with a growing interest in Golang.
              </p>
            </h2>

            <div className="flex items-center gap-4 mt-5">
              <Image
                className=" rounded-full"
                src={"/images/sanjay_m.png"}
                width={60}
                height={60}
                alt="sanjay-m circle image"
              ></Image>

              <div className="flex flex-col gap-3 text-zinc-400 text-sm font-satoshim">
                <div className="flex gap-4 underline">
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

                {copyStatus ? (
                  <p className="flex no-underline items-center gap-2">
                    email copied! <CheckCheck size={14} />
                  </p>
                ) : (
                  <a
                    onClick={handleCopyClick}
                    className="flex items-center gap-2 underline cursor-pointer"
                  >
                    work.sanjaym@gmail.com <Copy size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:max-h-[calc(100vh-40px)] overflow-hidden md:mr-10">
          <h1 className="flex justify-between px-10 md:px-0 text-zinc-200 text-base font-satoshim mb-3">
            Projects{" "}
            <ArrowRight className="mx-1 mt-2 block md:hidden" size={16} />
            {/* <ArrowDown className="mx-1 mt-2 hidden md:block" size={16} /> */}
          </h1>
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-y-auto gap-5 px-10 md:px-0 md:pb-10 md:mb-10 scrollbar-hide">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
