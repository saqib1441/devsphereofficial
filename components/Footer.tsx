import Link from "next/link";
import { FC } from "react";
import Logo from "./Logo";
import { SocialData } from "@/lib/data";
import Socials from "./Socials";

const Footer: FC = () => {
  return (
    <footer>
      <div className="container text-center grid gap-10 mb-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {/* Logo and Social Links Section */}
        <div className="flex items-center flex-col gap-5 lg:col-span-2 xl:items-start xl:text-start">
          <Logo />
          <p className="text-black/70 dark:text-white/70">
            Transform your business with expert web/app development, UI/UX
            design & branding. Secure, scalable IT services driving innovation
            that lasts.
          </p>
          <div className="flex gap-3 text-lg text-primary justify-center xl:justify-start">
            {SocialData.map((social, index) => {
              return (
                <Socials href={social.url} key={index} icon={social.icon} />
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-nunito font-black text-black/90 dark:text-white/90">
            Services
          </h1>
          <div className="flex flex-col gap-3 text-black/70 dark:text-white/70">
            <Link
              href="/services/1"
              className="hover:text-primary transition-all duration-300"
            >
              Graphic Designing
            </Link>
            <Link
              href="/services/2"
              className="hover:text-primary transition-all duration-300"
            >
              UI/UX Designing
            </Link>
            <Link
              href="/services/3"
              className="hover:text-primary transition-all duration-300"
            >
              Web Development
            </Link>
            <Link
              href="/services/4"
              className="hover:text-primary transition-all duration-300"
            >
              App Development
            </Link>
            <Link
              href="/services/5"
              className="hover:text-primary transition-all duration-300"
            >
              Digital Marketing & Seo
            </Link>
            <Link
              href="/services/6"
              className="hover:text-primary transition-all duration-300"
            >
              Video Editing
            </Link>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-nunito font-black text-black/90 dark:text-white/90">
            Useful Links
          </h1>
          <div className="flex flex-col gap-3 text-black/70 dark:text-white/70">
            <Link
              href="/"
              className="hover:text-primary transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="hover:text-primary transition-all duration-300"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-nunito font-black text-black/90 dark:text-white/90">
            Contact Us
          </h1>
          <div className="flex flex-col gap-3 text-black/70 dark:text-white/70">
            <Link
              href="tel:+923467890654"
              className="hover:text-primary transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              +92 346 7890654
            </Link>
            <Link
              href="mailto:devsphereofficial@gmail.com"
              className="hover:text-primary transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              devsphereofficial@gmail.com
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <p className="text-center text-black/70 dark:text-white/70 mb-5">
        &copy; {new Date().getFullYear()} DevSphere. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
