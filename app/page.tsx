"use client";

import Card from "@/components/card";
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <div className="">
      <Navbar />

      <div className="flex flex-col h-screen ">
        <p className="text-4xl mx-10 mt-10 font-satoshim ">
          projects
          <span className="inline-block align-super text-base">(4)</span>{" "}
        </p>
        <div className="flex items-center justify-start text-4xl overflow-x-auto">
          <div className="flex flex-shrink-0 m-9 gap-5">
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
    </div>
  );
};

export default Home;
