import Link from "next/link";
import { FC, ReactNode } from "react";

interface SocialInterface {
  href: string;
  icon: ReactNode;
}

const Socials: FC<SocialInterface> = ({ href, icon }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full shadow-mainShadow flex items-center justify-center text-primary dark:bg-secondary dark:shadow-none dark:text-white dark:hover:text-primary transition-all duration-300 hover:bg-primary hover:text-white"
  >
    {icon}
  </Link>
);

export default Socials;
