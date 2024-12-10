"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Utensils,
  ShoppingCart,
  FileText,
  User,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Update", icon: Plus, href: "/meal" },
  // { name: "Analytics", icon: FileText, href: "/details" },
  { name: "User", icon: User, href: "/user" },
];

export default function ResponsiveNav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed bg-background border-t md:border-r border-border z-50",
        isMobile ? "bottom-0 left-0 right-0 h-16 bg-black" : "hidden"
      )}
    >
      <ul
        className={cn(
          "flex h-full items-center justify-around md:justify-start md:flex-col md:items-start md:p-4 md:space-y-4",
          isMobile ? "flex-row" : "flex-col"
        )}
      >
        {navItems.map((item) => (
          <li key={item.name} className="w-full">
            <Link
              href={item.href}
              className={cn(
                "flex items-center justify-center md:justify-start p-2 rounded-lg transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground",
                isMobile ? "flex-col text-[10px]" : "flex-row space-x-4"
              )}
            >
              <item.icon className={cn("h-6 w-6", isMobile ? "mb-1" : "")} />
              <span
                className={cn(isMobile ? "sr-only" : "hidden md:inline-block")}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
