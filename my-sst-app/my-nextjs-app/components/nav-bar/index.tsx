import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Fragment } from "react";

export type NavigationProps = {
  name: string;
  href: string;
};

const navigations: NavigationProps[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const menuBtnStyle = "fill-current w-8 h-8 mr-2";

export default function NavBar() {
  return (
    <div className="fixed top-16 left-20 w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of the chevron icon. */
          <>
            <Popover.Button className=" inline-flex items-center bg-transparent px-2 font-bold text-opacity-25">
              {open ? (
                <XMarkIcon className={menuBtnStyle} />
              ) : (
                <Bars3Icon className={menuBtnStyle} />
              )}
              Menu
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
              <Popover.Panel className="max-w-sms absolute z-10 w-full">
                {({ close }) => (
                  <div className="overflow-hidden">
                    <div className="relative grid bg-white p-7">
                      {navigations.map((item) => (
                        <Link
                          className="my-0 flex w-full items-center border-b border-gray-400 p-2 transition duration-150 ease-in-out first:border-t hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          href={item.href}
                          onClick={() => close()}
                        >
                          {item.name}
                        </Link>
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
