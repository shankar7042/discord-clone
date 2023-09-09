"use client";

import { SessionProvider } from "next-auth/react";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default UserProvider;
