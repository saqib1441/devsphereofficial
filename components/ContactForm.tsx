"use client";

import { FC, FormEvent, useState, ChangeEvent } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FaStarOfLife } from "react-icons/fa6";
import { toast } from "react-hot-toast";

interface FormDataInterface {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<FormDataInterface>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      return toast.error("All fields are required!");
    }

    setLoading(true);

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const response: ApiResponse = await result.json();

      if (!response.success) {
        toast.error(response.message);
      } else {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send the message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mt-10" onSubmit={formHandler}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
        <div className="grid gap-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <span>Name</span>
            <FaStarOfLife className="text-[8px] text-primary" />
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <span>Email</span>
            <FaStarOfLife className="text-[8px] text-primary" />
          </Label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="subject" className="flex items-center gap-2">
            <span>Subject</span>
            <FaStarOfLife className="text-[8px] text-primary" />
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
        </div>
      </div>

      <div className="grid gap-2 my-3">
        <Label htmlFor="message" className="flex items-center gap-2">
          <span>Message</span>
          <FaStarOfLife className="text-[8px] text-primary" />
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="resize-none"
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
