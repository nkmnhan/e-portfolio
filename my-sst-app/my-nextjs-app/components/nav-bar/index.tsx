import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import HamburgerBtn from "../hamburgur";

export type NavigationProps = {
  name: string;
  href: string;
};

const navigations: NavigationProps[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallary", href: "/gallary" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  return (
    <div className="fixed top-4 left-4 w-full max-w-sm md:top-12 md:left-20">
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
              <Popover.Panel className="max-w-sms absolute z-10 w-full">
                {({ close }) => (
                  <div className="overflow-hidden">
                    <div className="relative grid pr-10 font-bold text-white md:pr-0 md:pt-7">
                      {navigations.map((item) => (
                        <Link
                          key={item.href}
                          className="my-0 flex w-full items-center border-b border-white p-2 transition duration-150 ease-in-out first:border-t focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
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
