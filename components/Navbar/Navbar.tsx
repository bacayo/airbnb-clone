"use client";

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

import { SafeUser } from "@/types";
import Categories from "./Categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <div className="fixed z-20 w-full text-gray-200 shadow-2xl bg-neutral-900">
      <div className="py-4 border-b-[1] ">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
