import { ContactPageData } from "@/lib/data";
import Link from "next/link";
import { FC } from "react";

const ContactDetails: FC = () => {
  return (
    <div className="lg:w-1/2 shadow-mainShadow rounded-2xl p-5 sm:p-10 sm:flex sm:flex-col sm:items-center sm:text-center lg:text-start lg:items-start dark:shadow-none dark:bg-secondary/70">
      <p className="text-primary mb-2">Get in touch</p>
      <h1 className="text-3xl font-black font-nunito mb-2 text-black/90 dark:text-white/90 sm:w-[400px]">
        Your Next Big Idea Starts with a Conversation!
      </h1>
      <p className="text-black/70 dark:text-white/70">
        Have an idea in mind or need expert guidance? We&#39;re here to listen,
        collaborate, and bring your vision to life. Whether it&#39;s a project
        inquiry, partnership opportunity, or just a question, let&#39;s start
        the conversation and create something amazing together. Reach out to us
        today!
      </p>

      {/* Contact Details */}
      <div className="mt-10 flex flex-col gap-5 sm:w-[400px] lg:w-full text-start">
        {ContactPageData.map((contact, index) => (
          <div
            key={index}
            className="flex gap-5 bg-primary dark:bg-background/50 text-white items-center px-5 rounded-md py-3"
          >
            <div className="text-2xl">{contact.icon}</div>
            <div className="flex flex-col">
              <h1>{contact.title}</h1>
              <Link
                className="break-all text-white/70"
                href={
                  contact.title === "Call Us"
                    ? "tel:+923467890654"
                    : contact.title === "Email Us"
                    ? "mailto:devsphereoffice@gmail.com"
                    : contact.title === "WhatsApp Us"
                    ? "https://wa.me/923467890654"
                    : ""
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.description}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
