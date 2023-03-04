import styles from "./style.module.css";

export type HamburgerBtnProp = {
  active: boolean;
};

export default function HamburgerBtn({ active }: HamburgerBtnProp) {
  return (
    <>
    <span className="w-10 h-10 inline-block relative">
        {active ? BarX() : Bar3()}
        {/* {Bar3()}
        {BarX()} */}
    </span>
    </>
  );
}

function Bar3() {
  return (
    <span
      className="absolute bottom-0 -mt-px block h-2 w-10 bg-[url('/nav-hamburger-bot.png')] bg-cover invert
before:absolute before:-top-6 before:-mt-px before:block before:h-2 before:w-10 before:bg-[url('/nav-hamburger-bot.png')] before:bg-cover
after:absolute after:-top-3 after:-mt-px after:block after:h-2 after:w-10 after:bg-[url('/nav-hamburger-bot.png')] after:bg-cover"
    ></span>
  );
}

function BarX(){
  return <span
  className="absolute bottom-3 -mt-px block h-2 w-10 bg-[url('/nav-hamburger-bot.png')] bg-cover invert -rotate-45
  before:absolute  before:-mt-px before:block before:h-2 before:w-10 before:bg-[url('/nav-hamburger-bot.png')] before:bg-cover before:-rotate-90
after:absolute  after:-mt-px after:block after:h-2 after:w-10 after:bg-[url('/nav-hamburger-bot.png')] after:bg-cover after:rotate-45 after:opacity-0"
></span>;
}
