"use client";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

const ProfileImage = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-4">
        <Image
          src={session.user.image}
          className="rounded-full"
          width={32}
          height={32}
          alt="profile"
        />
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return <button onClick={() => signIn("github")}>Sign IN</button>;
};

export default ProfileImage;
