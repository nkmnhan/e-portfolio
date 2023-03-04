import styles from "./style.module.css";

export type HamburgerBtnProp = {
  active: boolean;
};

export default function HamburgerBtn({ active }: HamburgerBtnProp) {
  return (
    <>
        {active ? BarX() : Bar3()}
    </>
  );
}

function Bar3() {
  return (
    <span
      className="absolute top-auto bottom-0 -mt-px block h-2 w-10 bg-[url('/nav-hamburger-bot.png')] bg-cover invert
before:absolute before:-top-6 before:bottom-auto before:-mt-px before:block before:h-2 before:w-10 before:bg-[url('/nav-hamburger-bot.png')] before:bg-cover
after:absolute after:-top-3 after:bottom-auto after:-mt-px after:block after:h-2 after:w-10 after:bg-[url('/nav-hamburger-bot.png')] after:bg-cover"
    ></span>
  );
}

function BarX(){
  return <span
  className="absolute top-auto bottom-0 -mt-px block h-2 w-10 bg-[url('/nav-hamburger-bot.png')] bg-cover invert -rotate-45
  before:absolute before:top-0 before:bottom-auto before:-mt-px before:block before:h-2 before:w-10 before:bg-[url('/nav-hamburger-bot.png')] before:bg-cover before:-rotate-90
after:absolute after:top-0 after:bottom-auto after:-mt-px after:block after:h-2 after:w-10 after:bg-[url('/nav-hamburger-bot.png')] after:bg-cover after:rotate-45 after:opacity-0"
></span>;
}
