"use client";
import { signIn } from "next-auth/react";
const LoginButton = () => {
  return (
    <button
      onClick={() => signIn("github")}
      className="bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign In With GitHub
    </button>
  );
};

export default LoginButton;
