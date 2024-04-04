import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, icons } from "lucide-react";

interface CardProps {
  src: string; // Image source
  projectName: string; // Project name
  projectDescription: string; // Project description
  badges: string[]; // Array of badge text
}

//perfect rounded corner rule = outer-radius - inner-radius = padding
const Card: React.FC<CardProps> = ({
  src,
  projectName,
  projectDescription,
  badges,
}) => {
  const cardStyles: React.CSSProperties = {
    borderRadius: "20px", //outer-radius
    width: "270px",
    height: "auto",
    overflow: "hidden",
  };

  const imageDivStyles: React.CSSProperties = {
    padding: "10px", // padding
  };

  const imageStyles: React.CSSProperties = {
    borderRadius: "10px", //inner-radius
  };

  return (
    <div className="border-raised" style={cardStyles}>
      <div style={imageDivStyles}>
        <Image
          src={src}
          alt="project illustration"
          width={250}
          height={250}
          className=""
          style={imageStyles}
        />
        <div className="font-geist">
          <p className="text-base mx-2 mt-2 mb-1 font-medium">{projectName}</p>
          <p className="text-xs mx-2 text-gray-400 leading-tight">
            {projectDescription}
          </p>
        </div>
        <div className="flex gap-2 mt-3 mb-4 mx-2">
          {badges.map((badge, index) => (
            <Badge className="font-geist" key={index} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
        <hr className="mx-2" />
        <div className="flex mb-2 mt-4 gap-4 px-2">
          <Button
            variant={"secondary"}
            className="rounded-lg text-xs h-9 grow border font-geist"
          >
            Check it out live
          </Button>
          <Button
            size={"icon"}
            className="rounded-lg text-xs h-9 grow flex items-center justify-center font-geist"
          >
            <Github className="ml-[2px]" size={22} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
