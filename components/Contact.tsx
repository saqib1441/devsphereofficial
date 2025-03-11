import { FC } from "react";
import ContactForm from "./ContactForm";
import PageHeader from "./PageHeader";
import ContactDetails from "./ContactDetails";

const Contact: FC = () => {
  return (
    <section>
      {/* Page Header */}
      <PageHeader
        title="Contact Us"
        description="Contact Us Today - We're Here to Help with Your Needs!"
      />
      <div className="container flex flex-col gap-10 lg:flex-row items-start">
        {/* Contact Information */}
        <ContactDetails />

        {/* Contact Form */}
        <div className="lg:w-1/2 shadow-mainShadow dark:shadow-none dark:bg-secondary/70 rounded-2xl p-5 sm:p-10">
          <h1 className="text-3xl font-black font-nunito mb-2 text-black/90 dark:text-white/90">
            Let&#39;s talk!
          </h1>
          <p className="text-black/70 dark:text-white/70">
            Have questions, suggestions, or a project idea? We&#39;re here to
            listen! Reach out to us for expert guidance, collaboration, or
            support. Your feedback matters, and we&#39;re just a message away.
            Let&#39;s create something amazing together—get in touch today!
          </p>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
