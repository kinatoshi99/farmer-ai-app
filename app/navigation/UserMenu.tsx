import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

export const UserMenu = () => {
  const { userId } = auth();
  return (
    <div className="flex gap-6 items-center">
      {!userId ? (
        <>
          <Link href="/sign-in">
            <li>Login</li>
          </Link>
          <Link href="/sign-up">
            <li>Sign Up</li>
          </Link>
        </>
      ) : (
        <>
          <Link href="/profile">
            <li>Profile</li>
          </Link>
          <li className="flex items-center">
            <UserButton />
          </li>
        </>
      )}
    </div>
  );
};
