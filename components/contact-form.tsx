"use client";
import React, { FormEvent, useRef, useState } from "react";
import {
  HiOutlineBuildingOffice2,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineDevicePhoneMobile,
  HiOutlinePhoneArrowUpRight,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/text-area";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { Icons } from "./icons";

const ContactForm = () => {
  const { toast } = useToast();
  const name = useRef<HTMLInputElement>(null);
  const number = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (emailRef !== null && messageRef !== null) {
      const result = await fetch("/api/send-mail", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current?.value,
          message: messageRef.current?.value,
        }),
      });
      if (result.status === 200) {
        toast({
          description: "Message was successfully sent!",
        });
        setLoading(false);
      } else {
        toast({
          description: "Oopps, message failed to sent!",
          variant: "destructive",
        });
        setLoading(false);
      }
    }
  };

  return (
    <div className="grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:mt-4">
      <div className="relative pb-20 pt-10 sm:pt-12 lg:border-r">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Get in touch
          </h2>
          <p className="mt-6 leading-8text-muted-foreground">
            We would love to answer any questions about Abana Projects, or
            address any problems you are running into!
          </p>
          <dl className="mt-10 space-y-4 text-base leading-7 text-foreground/80">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <HiOutlineBuildingOffice2
                  className="h-7 w-6 text-zinc-400 dark:text-foreground/95"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                4 Patmar House
                <br />7 Selkirk Road Eastlea <br />
                Harare, Zimbabwe
              </dd>
            </div>
            <div className="flex gap-x-4 group">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <HiOutlinePhoneArrowUpRight
                  className="h-7 w-6 text-zinc-400 dark:text-foreground/95 group-hover:text-orange-500"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <Link
                  className="group-hover:text-foreground"
                  href="tel:+263 86 8800 8032"
                >
                  +263 86 8800 8032
                </Link>
              </dd>
            </div>
            <div className="flex gap-x-4 group">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <FaWhatsapp
                  className="h-7 w-6 text-zinc-400 dark:text-foreground/95 group-hover:text-orange-500"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <Link
                  className="group-hover:text-foreground"
                  href="https://wa.me/+263715784168"
                >
                  +263 71 578 4168
                </Link>
              </dd>
            </div>
            <div className="flex gap-x-4 group">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <HiOutlineDevicePhoneMobile
                  className="h-7 w-6 text-zinc-400 dark:text-foreground/95 group-hover:text-orange-500"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <Link
                  className="group-hover:text-foreground"
                  href="tel: +263 77 381 5164"
                >
                  +263 77 381 5164
                </Link>
              </dd>
            </div>
            <div className="flex gap-x-4 group">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <HiOutlineEnvelope
                  className="h-7 w-6 text-zinc-400 dark:text-foreground/95 group-hover:text-orange-500"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <Link
                  className="group-hover:text-foreground"
                  href="mailto:info@abanaprojects.com"
                >
                  info@abanaprojects.com
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:px-6 pb-24 pt-4 lg:pt-16 sm:pb-12 lg:px-8"
      >
        <div className="max-w-xl lg:mr-0 lg:max-w-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-foreground"
              >
                Name
              </label>
              <div className="mt-2.5">
                <Input
                  type="text"
                  name="name"
                  ref={name}
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-semibold leading-6 text-foreground"
              >
                Phone Number
              </label>
              <div className="mt-2.5">
                <Input
                  type="tel"
                  name="mobile"
                  ref={number}
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-foreground"
              >
                Email
              </label>
              <div className="mt-2.5">
                <Input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="someone@example.com"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-foreground"
              >
                Message
              </label>
              <div className="mt-2.5">
                <Textarea
                  ref={messageRef}
                  name="message"
                  required
                  rows={7}
                  placeholder="Type your message"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            {isLoading ? (
              <Button type="submit" className="rounded-full">
                <Icons.spinner /> Send message
              </Button>
            ) : (
              <Button type="submit" className="rounded-full">
                Send message
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
