"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="my-10">
      <div className="">
        <h1 className="lg:text-5xl font-bold">Hi, I&apos;m Shakib 👋</h1>
        <p>
          Veterinary Doctor turned Full Stack Developer. I love building things and helping people.
        </p>

        <div className="my-3">
          <h3 className="font-semibold text-2xl"> About</h3>
          <p className="text-sm text-gray-500">
            A veterinary science graduate from Bangladesh, I discovered my passion for web
            development during the pandemic. Self-taught in JavaScript, React, and Next.js,
            I&apos;ve successfully built numerous projects for clients, combining my scientific
            background with tech skills. I thrive on learning and tackling new challenges in the
            ever-evolving tech world. Always eager to innovate and create, I&apos;m seeking
            opportunities to apply my unique blend of analytical thinking and coding expertise to
            build impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
