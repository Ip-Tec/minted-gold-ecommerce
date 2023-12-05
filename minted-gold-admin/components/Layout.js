import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import { useState } from "react";
import Logo from "@/components/Logo";
import GitHub from "@/icon/github";
import GoogleIcon from "@/icon/google";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();
  console.log({ session });
  if (!session) {
    return (
      <>
        <div className="bg-slate-900 w-screen h-screen flex items-center relative">
          <div className="text-center w-full flex flex-col p-4 m-auto justify-evenly items-center text-white bg-slate-900">
            <h1 className="text-white w-auto overflow-hidden relative bg-slate-900 m-0 pt-9">
              Login to access the Admin Dashboard
              <img src="./public/favicon.ico" />
            </h1>
            <button
              onClick={() => signIn("github")}
              className="bg-gray-600 w-auto m-3 flex items-center justify-evenly p-4 rounded-lg"
            >
              <GitHub width={"2rem"} height={"2rem"} />
              <span className="px-3.5">Login with GitHub</span>
            </button>
            <button
              onClick={() => signIn("google")}
              className="bg-white w-auto m-3 flex items-center justify-evenly text-black p-4 rounded-lg"
            >
              <GoogleIcon width={"2rem"} height={"2rem"} />
              <span className="px-3.5">Login with Google</span>
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="bg-bgGray min-h-screen ">
      <div className="block md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4">{children}</div>
      </div>
    </div>
  );
}
