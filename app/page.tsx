"use client";

import Card from "@/components/card";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

const Home = () => {
  return (
    <div>
      <div className="container max-w-6xl">
        <Navbar />
        <Hero />

        <p className="text-3xl mt-8 font-playfair ">
          Projects
          <span className="inline-block align-super text-base">(4)</span>{" "}
        </p>
      </div>

      <div className="flex items-center justify-start text-4xl overflow-x-auto md:container md:max-w-6xl">
        <div className="flex flex-shrink-0 my-6 mx-9 md:mx-0 gap-5">
          <Card
            src="/images/parrot.jpeg"
            projectName="High Performant Chat Server"
            projectDescription="Some information about the project, this project is written in Golang, with keeping sheer performance in mind."
            badges={["Backend", "WebSockets"]}
          />
          <Card
            src="/images/chat.jpeg"
            projectName="Chat UI"
            projectDescription="Some information about the project, this project is written in Golang, with keeping sheer performance in mind."
            badges={["Frontend", "NextJS"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
