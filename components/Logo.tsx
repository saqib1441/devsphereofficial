"use client";

import LogoLight from "@/assets/logo-light.png";
import LogoDark from "@/assets/logo-dark.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FC } from "react";

const Logo: FC = () => {
  const { theme } = useTheme();

  // Fallback logo in case theme is undefined
  const logoSrc = theme === "dark" ? LogoDark : LogoLight;

  return (
    <div>
      <Image
        src={logoSrc}
        alt="Dev Sphere logo"
        priority
        className="w-[150px] lg:w-[200px]"
      />
    </div>
  );
};

export default Logo;
