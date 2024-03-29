"use client";

import Card from "@/components/card";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <p className="text-3xl mx-10 mt-10">Projects(4)</p>
        <div className="flex m-5 gap-5 items-center justify-center text-4xl">
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
