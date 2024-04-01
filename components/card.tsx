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

const Card: React.FC<CardProps> = ({
  src,
  projectName,
  projectDescription,
  badges,
}) => {
  const cardStyles: React.CSSProperties = {
    borderRadius: "30px",
    width: "270px",
    height: "auto",
    overflow: "hidden",
  };

  const imageDivStyles: React.CSSProperties = {
    padding: "10px",
  };

  const imageStyles: React.CSSProperties = {
    borderRadius: "20px",
  };

  return (
    <div className="border-raised" style={cardStyles}>
      <div style={imageDivStyles}>
        <Image
          src={src} // Use src prop for image source
          alt="project illustration"
          width={250}
          height={250}
          className=""
          style={imageStyles}
        />
        <div>
          <p className="text-base mx-2 mt-2 mb-1">{projectName}</p>{" "}
          {/* Use projectName prop */}
          <p className="text-xs mx-2 text-gray-400">
            {projectDescription}
          </p>{" "}
          {/* Use projectDescription prop */}
        </div>
        <div className="flex gap-2 mt-3 mb-4 mx-2">
          {badges.map((badge, index) => (
            <Badge key={index} variant="outline">
              {badge}
            </Badge>
          ))}
        </div>
        <hr className="mx-2" />
        <div className="flex mb-2 mt-4 gap-4 px-1">
          <Button
            variant={"secondary"}
            className="rounded-full text-xs h-9 m-0 py-0 grow border"
          >
            Check it out live
          </Button>
          <Button
            size={"icon"}
            className="rounded-full text-xs h-9 w-9 grow-0 flex items-center justify-center"
          >
            <Github className="ml-[2px]" size={22} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
