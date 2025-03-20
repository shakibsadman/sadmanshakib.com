import React from "react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 justify-between max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <Image
              src="/dr_sadman_shakib.jpg"
              className="rounded-full h-64 w-64 object-cover border-4 border-background relative z-10"
              alt="Sadman Shakib - Full Stack Developer"
              width={500}
              height={500}
            />
          </div>

          <div className="md:w-3/5">
            <div className="space-y-4 text-[16px] leading-relaxed text-zinc-200">
              <p className="text-lg">
                Hi, I&apos;m <span className="font-semibold text-primary">Sadman Shakib</span>, a passionate Full Stack Developer dedicated to turning
                ideas into functional, scalable web applications. With a strong foundation in
                <span className="text-secondary"> TypeScript, Next.js, React, and Tailwind CSS</span>, I specialize in building modern,
                responsive, and user-friendly web solutions.
              </p>

              <p>
                My expertise lies in developing robust front-end interfaces and seamless back-end
                systems, ensuring a smooth user experience from start to finish. I thrive on helping
                entrepreneurs and businesses bring their SaaS ideas to life, offering tailored MVPs
                that are both efficient and scalable.
              </p>

              <p>
                Whether you&apos;re launching your first product or need a reliable developer to
                elevate your existing project, I&apos;m here to make it happen. Let&apos;s
                collaborate to build something amazing!
              </p>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-background font-medium rounded-full hover:bg-opacity-90 transition-all duration-300"
                  tabIndex={0}
                  aria-label="Contact Sadman Shakib"
                >
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
