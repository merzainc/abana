"use client";
import { useId } from "react";

const Footer = () => {
  return (
    <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-zinc-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-zinc-600">
        <p>Copyright &copy; {new Date().getFullYear()} Abana Projects</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

export function GridPattern(props: any) {
  let patternId = useId();

  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
      <defs>
        <pattern
          id={patternId}
          width="128"
          height="128"
          patternUnits="userSpaceOnUse"
          {...props}
        >
          <path d="M0 128V.5H128" fill="none" stroke="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
