"use client";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import FramerWrapper from "@/components/animations/framer-wrapper";
import { LuFacebook, LuLinkedin, LuTwitter } from "react-icons/lu";

const SocialLinks = () => {
  const links = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/DrSadmanShakib",
      icon: <LuFacebook className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      link: "https://x.com/thesadmanshakib",
      icon: <LuTwitter className="h-5 w-5" />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/thesadmanshakib",
      icon: <LuLinkedin className="h-5 w-5" />,
    },
    {
      name: "External",
      link: "https://www.upwork.com/freelancers/~0169d0ad10a0d8d490",
      icon: <ExternalLink />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
