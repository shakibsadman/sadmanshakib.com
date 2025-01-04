import React from "react";

import Image from "next/image";
export default function AboutMe() {
  return (
    <div className=" py-10 bg-background">
      <div className="container mx-auto">
        <div className="">
          <h1>About Me</h1>
        </div>
        <div className="flex items-center gap-5  justify-center">
          <Image
            src="/dr_sadman_shakib.jpg"
            className="rounded-full h-60 w-60 aspect-square "
            alt="Profile"
            width={500}
            height={500}
          />
          <div className="text-white w-1/2">
            <p className="text-[16px] leading-relaxed">
              Hi, I&apos;m Sadman Shakib, a passionate Full Stack Developer dedicated to turning
              ideas into functional, scalable web applications. With a strong foundation in
              TypeScript, Next.js, React, and Tailwind CSS, I specialize in building modern,
              responsive, and user-friendly web solutions. My expertise lies in developing robust
              front-end interfaces and seamless back-end systems, ensuring a smooth user experience
              from start to finish. I thrive on helping entrepreneurs and businesses bring their to
              finish. I thrive on helping entrepreneurs and businesses bring their SaaS ideas to
              life, offering tailored MVPs that are both efficient and scalable. Whether you&apos;re
              launching your first product or need a reliable developer to elevate your existing
              project, I&apos;m here to make it happen. Let&apos;s collaborate to build something
              amazing!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
