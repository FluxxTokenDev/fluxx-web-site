import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  logo?: string;
  menuItems?: Array<{
    label: string;
    href: string;
  }>;
  onSignIn?: () => void;
  onCreateAccount?: () => void;
}

const Navbar = ({
  logo = "Fluxx",
  menuItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  onSignIn = () => console.log("Sign in clicked"),
  onCreateAccount = () => console.log("Create account clicked"),
}: NavbarProps) => {
  return (
    <nav className="fixed top-0 w-full h-20 bg-[#0A0A0A] border-b border-gray-800 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/fluxxlogo.png" alt="Fluxx Logo" className="h-8" />
          </a>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(
                      "text-gray-300 hover:text-white transition-colors",
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-white hover:text-[#FF3B30] transition-colors"
            onClick={onSignIn}
          >
            Sign In
          </Button>
          <Button
            className="bg-[#FF3B30] hover:bg-[#FF3B30]/90 text-white"
            onClick={onCreateAccount}
          >
            Create Account
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
