import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

type PropsUser = {
  props?: any;
  className: string;
};

export default function User({ className }: PropsUser) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <img
          onClick={() => signOut}
          src={session?.user?.image || ""}
          className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`}
          alt="Foto do usuário logado"
        />
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => signIn}
        className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`}
      >
        Sign in
      </button>
    </>
  );
}
