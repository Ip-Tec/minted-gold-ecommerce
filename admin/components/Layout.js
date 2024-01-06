import Image from "next/image";
import GitHub from "@/icon/github";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import GoogleIcon from "@/icon/google";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Spinner from "./Spinner";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    // Use the session data here
    // console.log(session, { status });
  }, [session]);

  const displayLoginUser = session?.user?.name;
  // const status = "unauthenticated";

  return (
    <div className="bg-bgGray min-h-screen">
      {status === "unauthenticated" && (
        <>
          {/* Content for unauthenticated state */}
          <div className="text-center w-auto rounded-md max-h-screen mt-64 border-gray-200 bg-gray-100 shadow-inner flex flex-col p-4 m-auto justify-evenly max-w-sm mx-auto items-center">
            <h1 className="text-gray-800 text-center w-11/12">
              You are not Sign in
            </h1>
            <button
              onClick={() => signIn("google")}
              className="bg-white w-auto m-3 flex items-center justify-evenly text-black p-4 rounded-lg hover:shadow-xl"
            >
              <GoogleIcon width={"2rem"} height={"2rem"} />
              <span className="px-3.5">Sign In with Google</span>
            </button>
          </div>
        </>
      )}

      <div className="flex">
        {status === "authenticated" && (
          <>
            {/* Content for authenticated state */}
            <Nav show={showNav} />
            <div className="flex-grow p-4">
              <div className="text-blue-900 flex justify-between mb-4">
                <h2>
                  Hello, <b className="capitalize">{displayLoginUser}</b>
                </h2>
                <div className="flex bg-gray-300 gap-1 py-1 px-1 text-black rounded-lg overflow-hidden">
                  <Image
                    src={session?.user?.image}
                    width={24}
                    height={24}
                    alt={`${session.user.name} Profile picuture`}
                    className="w-6 h-6"
                  />
                  <span className="px-2 capitalize">{displayLoginUser}</span>
                </div>
              </div>

              <div className="flex-grow p-4">{children}</div>
            </div>
          </>
        )}

        {status === "loading" && (
          <>
            {/* Content for loading state */}
            <div className="h-screen flex justify-center align-middle place-content-center w-full mx-auto items-center">
              <div>
                <Spinner />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
