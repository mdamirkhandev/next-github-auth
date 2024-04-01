import Link from "next/link";
import ProfileImage from "./ProfileImage";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between fixed left-0 right-0 px-8 h-14 bg-blue-500 text-white">
      <Link className="font-bold" href={"/"}>
        MyLogo
      </Link>
      <ProfileImage />
    </nav>
  );
};

export default Navbar;
