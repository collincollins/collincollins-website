"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <header className="container z-20 flex items-center justify-between gap-5 py-4 md:py-8">

        {/* desktop/tablet navigation (right-aligned md+) */}
        <nav className="hidden md:flex flex-1 md:justify-end">
          <ul className="flex items-center gap-6">
             <li><Link href="/" legacyBehavior passHref><Button variant="default" asChild><a>About</a></Button></Link></li>
             <li><Link href="/projects" legacyBehavior passHref><Button variant="default" asChild><a>Projects</a></Button></Link></li>
             <li><Link href="/experience" legacyBehavior passHref><Button variant="default" asChild><a>Experience</a></Button></Link></li>
             <li><Button variant="default" asChild><a href="/collin_resume.pdf" download><span>Resume</span></a></Button></li>
          </ul>
        </nav>
        
        {/* mobile menu button (visible below md) */}
        <div className="md:hidden">
          <SheetTrigger asChild>
            <Button
              variant="noShadow"
              size="icon"
              className="inline-flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <MenuIcon className="h-5 w-5 text-text" />
            </Button>
          </SheetTrigger>
        </div>

      </header>

      {/* mobile menu content (sheet from right) */}
      <SheetContent side="left" className="w-[200px] sm:w-[200px] bg-main border-l-2 border-border p-6 flex flex-col"> {/* changed side and border */}
          <SheetHeader className="mb-2 mt-4">
            <SheetTitle className="text-center text-xl font-heading">Navigation</SheetTitle>
          </SheetHeader>
          <nav className="flex-1">
             <ul className="flex flex-col items-start gap-4">
              <li>
                <Link href="/" legacyBehavior passHref>
                  <Button variant="noShadow" className="w-full justify-start" onClick={() => setIsMobileMenuOpen(false)}>
                    About
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/projects" legacyBehavior passHref>
                  <Button variant="noShadow" className="w-full justify-start" onClick={() => setIsMobileMenuOpen(false)}>
                    Projects
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/experience" legacyBehavior passHref>
                  <Button variant="noShadow" className="w-full justify-start" onClick={() => setIsMobileMenuOpen(false)}>
                    Experience
                  </Button>
                </Link>
              </li>
              <li className="pt-4">
                  <Button variant="default" asChild className="w-full justify-start"><a href="/collin_resume.pdf" download>Resume</a></Button>
              </li>
            </ul>
          </nav>
      </SheetContent>
    </Sheet>
  );
} 