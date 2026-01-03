"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/src/components/ui/button";
import { Send } from "lucide-react";
import { FormProps } from "@/types/contact";
import { submitContactForm } from "@/src/lib/submitContactForm";

const ContactForm = () => {
  const [formData, setFormData] = React.useState<FormProps>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    submitContactForm(formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <form className="border rounded-2xl p-6 min-w-[369px]" onSubmit={handleSubmit}>
      <div className="mb-5">
        <Label htmlFor="name" className="text-base mb-2">
          Name
        </Label>
        <Input
          required
          className="bg-white h-10"
          type="text"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="mb-5">
        <Label className="text-base mb-2" htmlFor="email">
          Email
        </Label>
        <Input
          required
          className="bg-white h-10"
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="mb-5">
        <Label className="text-base mb-2" htmlFor="message">
          Message
        </Label>
        <Textarea
          required
          className="bg-white max-w-[690px]"
          id="message"
          placeholder="Message"
          rows={2}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
      <Button
        type="submit"
        className="mt-4 w-full font-bold text-base bg-[var(--main-color)] cursor-pointer"
      >
        Send Message <Send size={35} strokeWidth={2.5} />
      </Button>
    </form>
  );
};

export default ContactForm;
