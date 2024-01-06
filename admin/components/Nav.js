import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function Nav({ show }) {
  const inactiveLink = "flex gap-1 p-4 my-4 text-lg hover:bg-highlight ";
  const activeLink = inactiveLink + " bg-highlight text-black rounded-md";
  const inactiveIcon = "w-6 h-6";
  const activeIcon = inactiveIcon + " text-primary";
  const router = useRouter();
  const { pathname } = router;
  async function logout() {
    await router.push("/");
    await signOut();
  }
  return (
    <aside
      className={
        (show ? "left-0" : "-left-full") +
        " top-0 text-gray-500 p-4 fixed w-full bg-bgGray md:static md:w-auto transition-all h-screen border-r-slate-600 border-red"
      }
    >
      <div className="divide-black text-xl bg-gray-300 text-gray-700 px-3 py-6">
        <Logo />
      </div>
      <nav className="flex flex-col gap-2 h-auto ">
        <Link
          href={"/"}
          className={pathname === "/" ? activeLink : inactiveLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={pathname === "/" ? activeIcon : inactiveIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Dashboard
        </Link>
        <Link
          href={"/products"}
          className={pathname.includes("/products") ? activeLink : inactiveLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={
              pathname.includes("/products") ? activeIcon : inactiveIcon
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          Products
        </Link>
        <Link
          href={"/categories"}
          className={
            pathname.includes("/categories") ? activeLink : inactiveLink
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={
              pathname.includes("/categories") ? activeIcon : inactiveIcon
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          Categories
        </Link>
        <Link
          href={"/orders"}
          className={pathname.includes("/orders") ? activeLink : inactiveLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={pathname.includes("/orders") ? activeIcon : inactiveIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
            />
          </svg>
          Orders
        </Link>
        <Link
          href={"/settings"}
          className={pathname.includes("/settings") ? activeLink : inactiveLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={
              pathname.includes("/settings") ? activeIcon : inactiveIcon
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Settings
        </Link>
        <Link
          href={"/websiteSetting"}
          className={
            pathname.includes("/websiteSetting") ? activeLink : inactiveLink
          }
        >
          <svg
            fill="#000000"
            width="30px"
            height="30px"
            viewBox="0 0 100 100"
            version="1.1"
          >
            <g id="configuration">
              <g>
                <path d="M85,4H29c-2.8,0-5,2.2-5,5l0,34.6C17,48.2,12.4,56.1,12,65h-1c-0.6,0-1,0.4-1,1v7.1c0,0.5,0.4,0.9,0.9,1l3.5,0.5    c0.5,1.7,1.2,3.4,2.1,4.9l-2.1,2.8c-0.3,0.4-0.3,1,0.1,1.3l8.2,8c0.4,0.3,0.9,0.4,1.3,0.1l2.8-2.1c1.6,0.9,3.3,1.6,5,2.1l0.5,3.4    c0.1,0.5,0.5,0.9,1,0.9h11.5c0.5,0,0.9-0.4,1-0.9l0.5-3.4c1.7-0.5,3.4-1.2,5-2.1l2.8,2.1c0.4,0.3,0.9,0.3,1.3-0.1l8.2-8    c0.4-0.4,0.4-0.9,0.1-1.3l-2.1-2.8c0.9-1.6,1.6-3.2,2.1-4.9l3.5-0.5c0.5-0.1,0.9-0.5,0.9-1V70h17c2.8,0,5-2.2,5-5V9    C90,6.2,87.8,4,85,4z M29,6h56c1.7,0,3,1.4,3,3v7H26l0-7C26,7.4,27.4,6,29,6z M32,42c-2.6,2.4-4.8,6.2-6.2,10.8    c-4.6,1.4-8.4,3.6-10.8,6.2C17.4,50.8,23.9,44.4,32,42z M40,53c3.8,0.1,7.4,0.6,10.5,1.5c0.9,3.2,1.4,6.7,1.5,10.5H40L40,53z     M40,51l0-9.9c4.1,0.6,7.7,4.9,9.9,11.1C46.8,51.5,43.5,51.1,40,51z M38,41.1l0,9.9c-3.5,0.1-6.8,0.5-9.8,1.2    C30.3,46,33.9,41.7,38,41.1z M38,53l0,12H26c0.1-3.8,0.6-7.4,1.5-10.5C30.6,53.6,34.2,53.1,38,53z M24,65h-9.9    c0.6-4.1,4.9-7.7,11.1-9.8C24.5,58.2,24.1,61.5,24,65z M38,67l0,12.1c-6.5-0.5-11.5-5.6-12-12.1H38z M40,79.1L40,67h12    C51.5,73.6,46.5,78.6,40,79.1z M54,65c-0.1-3.5-0.5-6.8-1.2-9.8c6.3,2.2,10.5,5.7,11.1,9.8H54z M52.2,52.8    c-1.4-4.6-3.6-8.4-6.2-10.8c8.2,2.4,14.6,8.8,17,17C60.6,56.4,56.8,54.3,52.2,52.8z M66,72.2l-3.3,0.5c-0.4,0.1-0.7,0.3-0.8,0.7    c-0.5,2-1.3,3.9-2.4,5.7c-0.2,0.3-0.2,0.8,0.1,1.1l2,2.6l-6.9,6.8l-2.7-2c-0.3-0.2-0.7-0.3-1.1-0.1c-1.8,1-3.7,1.8-5.8,2.4    c-0.4,0.1-0.7,0.4-0.7,0.8L43.9,94h-9.8l-0.5-3.2c-0.1-0.4-0.3-0.7-0.7-0.8c-2-0.5-3.9-1.3-5.8-2.4c-0.3-0.2-0.8-0.2-1.1,0.1    l-2.7,2l-6.9-6.8l2-2.6c0.2-0.3,0.3-0.8,0.1-1.1c-1.1-1.8-1.9-3.7-2.4-5.7c-0.1-0.4-0.4-0.7-0.8-0.7L12,72.2V67h12    c0.5,8,6.9,14.2,15,14.2S53.5,75,54,67h12V72.2z M85,68H68v-2c0-0.6-0.4-1-1-1h-1c-0.5-14.4-12.4-26-27-26c-4.7,0-9.2,1.2-13,3.4    L26,18h62v47C88,66.6,86.6,68,85,68z" />

                <circle cx="81" cy="11" r="2" />

                <circle cx="74" cy="11" r="2" />

                <circle cx="67" cy="11" r="2" />

                <path d="M83,21h-7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c0.6,0,1-0.4,1-1S83.6,21,83,21z" />

                <path d="M83,25h-7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c0.6,0,1-0.4,1-1S83.6,25,83,25z" />

                <path d="M83,29h-7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c0.6,0,1-0.4,1-1S83.6,29,83,29z" />
              </g>
            </g>
          </svg>
          Website Setting
        </Link>
        <button onClick={logout} className={inactiveLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Logout
        </button>
      </nav>
    </aside>
  );
}
