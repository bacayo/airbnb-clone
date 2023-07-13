"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { onClose, onOpen } from "@/redux/slices/registerModalSlice";
import {
  onClose as onCloseLoginModal,
  onOpen as onOpenLoginModal,
} from "@/redux/slices/loginModalSlice";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";
import { rentModalOnOpen } from "@/redux/slices/rentModalSlice";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      dispatch(onOpenLoginModal());
    }
    // Open rent Modal
    dispatch(rentModalOnOpen());
  }, [currentUser, dispatch]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-700"
          onClick={onRent}
        >
          Airbnb your home
        </div>
        <div
          className="flex flex-row items-center gap-3 p-4 transition border rounded-full cursor-pointer border-rose-600 md:py-1 md:px-2 hover:shadow-md"
          onClick={toggleOpen}
        >
          <AiOutlineMenu className="text-rose-600" />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl w-[40vw] md:w-3/4 bg-neutral-900 overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My trips" />
                <MenuItem onClick={() => {}} label="My favorites" />
                <MenuItem onClick={() => {}} label="My reservations" />
                <MenuItem onClick={() => {}} label="My properties" />
                <MenuItem
                  onClick={() => {
                    dispatch(rentModalOnOpen());
                  }}
                  label="Airbnb my home"
                />
                <hr />
                <MenuItem
                  onClick={() => {
                    signOut();
                  }}
                  label="Logout"
                />
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    dispatch(onOpenLoginModal());
                  }}
                  label="Login"
                />
                <MenuItem
                  onClick={() => {
                    dispatch(onOpen());
                  }}
                  label="Sign Up"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
