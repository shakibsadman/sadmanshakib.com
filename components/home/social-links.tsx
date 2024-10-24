"use client";
import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import FramerWrapper from "@/components/animations/framer-wrapper";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/DrSadmanShakib", icon: <Facebook /> },
    { name: "Twitter", link: "https://x.com/thesadmanshakib", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/thesadmanshakib", icon: <Linkedin /> },
    { name: "External", link: "https://github.com/shadmanshakib", icon: <ExternalLink /> },
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
