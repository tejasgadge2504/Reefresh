/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";


const navItems = [
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
  { label: "Stories", href: "#stories" },
  { label: "Resources", href: "#resources" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {

 const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); 
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl w-full mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">
          <img src="/logo.png" alt="" className="w-[150px]" />
        </div>

        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button onClick={()=>{handleLogout}}>Logout</Button>
      </div>
    </header>
  );
};

export default Navbar;
