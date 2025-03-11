"use client";

import { FC } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaBarsStaggered } from "react-icons/fa6";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import { navLinks } from "@/lib/data";
import { usePathname } from "next/navigation";

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="shadow dark:shadow-white/5 bg-white/30 dark:bg-secondary/30 backdrop-blur-md w-full z-50 sticky top-0">
      <div className="container flex items-center py-5 justify-between">
        {/* Logo Section */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="md:flex gap-5 items-center hidden">
          {navLinks.map(({ path, name }, index) => (
            <Link
              href={path}
              key={index}
              className={`${
                path === "/"
                  ? pathname === "/"
                    ? "text-primary"
                    : ""
                  : pathname === path || pathname.startsWith(`${path}/`)
                  ? "text-primary"
                  : ""
              } hover:text-primary transition-all duration-300`}
            >
              {name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="hover:text-primary transition-all duration-300"
          >
            <Button>Contact</Button>
          </Link>
          {/* Theme Button */}
          <ThemeButton />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          <Sheet>
            <SheetTrigger aria-label="Open menu">
              <FaBarsStaggered className="text-lg cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="w-full">
              <SheetTitle />
              <SheetDescription />
              <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
                {navLinks.map(({ path, name }, index) => (
                  <SheetClose asChild key={index}>
                    <Link
                      href={path}
                      className={`${
                        path === "/"
                          ? pathname === "/"
                            ? "text-primary"
                            : ""
                          : pathname === path || pathname.startsWith(`${path}/`)
                          ? "text-primary"
                          : ""
                      } hover:text-primary transition-all duration-300`}
                    >
                      {name}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href="/contact">
                    <Button>Contact Us</Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>

          {/* Theme Button */}
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
