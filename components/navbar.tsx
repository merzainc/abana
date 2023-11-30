"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./ui/theme-toogle";

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="w-full border-b dark:border-b-accent bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex lg:hidden items-center space-x-2">
          <img src="/logo.svg" height="52px" width="50px" alt="Abana" />
          {/* <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span> */}
        </Link>
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img src="/logo.svg" alt="Abana" height="52px" width="50px" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/town-planning"
              className={cn(
                "transition-colors hover:text-orange-500",
                pathname === "/docs" ? "text-orange-500" : "text-foreground/60"
              )}
            >
              Town Planning
            </Link>
            <Link
              href="/commodity-broking"
              className={cn(
                "transition-colors hover:text-orange-500",
                pathname?.startsWith("/docs/components")
                  ? "text-orange-500"
                  : "text-foreground/60"
              )}
            >
              Commodity Broking
            </Link>
            <Link
              href="/about"
              className={cn(
                "transition-colors hover:text-orange-500",
                pathname?.startsWith("/themes")
                  ? "text-orange-500"
                  : "text-foreground/60"
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "transition-colors hover:text-orange-500",
                pathname?.startsWith("/examples")
                  ? "text-orange-500"
                  : "text-foreground/60"
              )}
            >
              Contact US
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
          </div>
          <nav className="flex items-center">
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
