import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import GitHub from "@/icon/github";
import GoogleIcon from "@/icon/google";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [email, setEmail] = useState();
  const { data: session, update, status } = useSession();

  useEffect(() => {
    // Use the session data here
    // console.log( session , { status }, { update });
    // console.log( session?.session?.session?.user);
    console.log(session?.user);
    // console.log(session);
  }, [session]);

  const displayLoginUser = session?.user?.name;
  console.log("session", session,displayLoginUser);
  if (!session) {
    return (
      <>
        <div className="bg-slate-900 w-screen h-screen flex items-center relative shadow-md">
          <div className="text-center w-full flex flex-col p-4 m-auto justify-evenly items-center text-white bg-slate-900">
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
            <div className="divided divide-x divide-y">or</div>
            <h6>Login with Email</h6>
            <div className="w-auto m-3 flex flex-col items-center justify-evenly text-black p-4 rounded-lg">
              <input
                width={"2rem"}
                placeholder="example@mail.com"
                height={"2rem"}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={() => signIn("credentials", { email })}
                className="px-3.5 p-3 bg-blue-800 my-2 hover:border-2 hover:bg-transparent hover:border-blue-800 hover:text-white rounded-md"
              >
                Login with Email
              </button>
            </div>
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
        <div className="flex-grow p-4">
          <div className="text-blue-900 flex justify-between mb-4">
            <h2>
              Hello, <b className="capitalize">{displayLoginUser}</b>
            </h2>
            <div className="flex bg-gray-300 gap-1 py-1 px-1 text-black rounded-lg overflow-hidden">
              <img src={session?.user?.image} alt="" className="w-6 h-6" />
              <span className="px-2 capitalize">{displayLoginUser}</span>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
