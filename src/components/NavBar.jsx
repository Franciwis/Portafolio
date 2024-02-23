'use client'
import { useState } from "react";
import React from "react";
import Link from "next/link";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";




const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
      "Acerca de mi",
      "Proyectos",
      "Contacto",
      ,
    ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-pink-500">
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
       
        <Link className="font-bold text-inherit" href='/'>Portafolio</Link>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="/about">
          Acerca de mi
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="/projects" aria-current="page">
          Proyectos
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/contact">
          Contacto
        </Link>
      </NavbarItem>
    </NavbarContent>
   
    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color={
              index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
            }
            className="w-full"
            href="#"
            size="lg"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  );
}

export default NavBar