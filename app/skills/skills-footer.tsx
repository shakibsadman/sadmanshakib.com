"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image, { StaticImageData } from "next/image";
import React from "react";

interface MyComponentProps {
  items: Array<{ alt: string; img: StaticImageData; children?: React.ReactNode }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((val, indx) => {
          return (
            <div className="p-4" key={indx}>
              <Image src={val?.img} alt={val?.alt} className="rounded-full w-auto max-h-20" />
            </div>
          );
        })}
    </>
  );
};

export default SkillsFooter;
