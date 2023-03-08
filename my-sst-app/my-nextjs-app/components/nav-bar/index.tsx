import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import HamburgerBtn from "../hamburgur";
import InstagramIco from "../icons/instagram";
import GithhubIco from "../icons/github";
import LinkedInIco from "../icons/linkedin";

export type NavigationProps = {
  id: string;
  name: string;
  href: string;
  icon?: JSX.Element;
};

const navigations: NavigationProps[] = [
  { id: "home", name: "Home", href: "/" },
  { id: "about", name: "About", href: "/about" },
  { id: "gallary", name: "Gallary", href: "/gallary" },
  { id: "contact", name: "Contact", href: "/contact" },
];

const socialContacts: NavigationProps[] = [
  { id: "instagram", name: "Instagram", href: "#", icon: InstagramIco() },
  {
    id: "github",
    name: "Github",
    href: "https://github.com/nkmnhan",
    icon: GithhubIco(),
  },
  { id: "linkedin", name: "LinkedIn", href: "##", icon: LinkedInIco() },
];

export default function NavBar() {
  return (
    <div className="fixed top-4 left-4 z-50 w-full max-w-sm md:top-8 md:left-8">
      <Popover className="relative">
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of the chevron icon. */
          <>
            <Popover.Button className="m-0 inline-block h-14 w-14 border-0 p-0 focus-visible:outline-none">
              <HamburgerBtn active={open} />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-x-0"
              enterTo="opacity-100 translate-x-1"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-x-1"
              leaveTo="opacity-0 translate-x-0"
            >
              <Popover.Panel className="absolute z-50 mt-3 w-screen max-w-sm pr-8 sm:px-0 md:px-4">
                {({ close }) => (
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid grid-cols-2 gap-2 bg-white p-2 md:grid-cols-1">
                      {navigations.map((item) => (
                        <Link
                          id={item.id}
                          href={item.href}
                          className="flex w-full items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none"
                          onClick={() => close()}
                        >
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-row bg-gray-50 p-4">
                      {socialContacts.map((item) => (
                        <a
                          id={item.id}
                          className=" flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.href}
                        >
                          <div className=" h-6 w-6">{item.icon}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
