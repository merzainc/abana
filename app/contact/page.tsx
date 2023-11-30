import ContactForm from "@/components/contact-form";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <section className="container pb-8 pt-6 md:py-10">
      <h3 className="text-center font-cabinet text-3xl font-semibold">
        Contact US
      </h3>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
