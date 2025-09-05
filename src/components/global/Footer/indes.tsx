import { Github, Linkedin } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 mt-10 flex flex-col justify-center items-center gap-4">
      <p className="text-sm">Follow us on:</p>
      <div className="flex gap-4">
        <a
          href="https://github.com/Akbaghel03"
          target="_blank"
          rel="noreferrer"
          aria-label="Akbaghel03 on GitHub"
        >
          <Github className="h-5 w-5 stroke-[0.75]" />
        </a>
        <a
          href="http://www.linkedin.com/in/ashwani-baghel-028823259"
          target="_blank"
          rel="noreferrer"
          aria-label="Ashwani_Baghel on LinkedIn"
        >
          <Linkedin className="h-5 w-5 stroke-[0.75]" />
        </a>
      </div>
      <a
        href="https://ashwani-portfolio03.netlify.app/"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit my Portfolio"
        className="group"
      >
        {"</>"} with 💛 by{" "}
        <span className="font-semibold transition-all ease-in-out group-hover:text-blue-500 decoration-wavy decoration-1 group-hover:underline underline-offset-[6px]">
          Ashwani Baghel
        </span>
      </a>
    </footer>
  );
}
