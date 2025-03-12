"use client";

import Link from "next/link";
import { Target, Calendar, Home, Mail, Menu, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil", icon: Home },
    { href: "/horaires", label: "Horaires", icon: Calendar },
    { href: "/club", label: "Le Club", icon: Target },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Target className="h-6 w-6" />
          <span className="font-bold">Les Archers</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/rejoindre" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Rejoindre le club
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            {navItems.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link
                  href={item.href}
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem asChild>
              <Link
                href="/rejoindre"
                className="flex items-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Rejoindre le club
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}