export type HamburgerBtnProp = {
  active: boolean;
};

export default function HamburgerBtn({ active }: HamburgerBtnProp) {
  return (
    <>
      <span className="relative inline-block h-10 w-10">
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
      className=" absolute bottom-0 -mt-px block h-2 w-10 bg-[url('/nav-hamburger-bot.png')] bg-cover invert transition delay-75 duration-500 ease-in

before:absolute before:-top-6 before:-mt-px before:block
      before:h-2 before:w-10 before:bg-[url('/nav-hamburger-bot.png')] before:bg-cover before:transition before:delay-75 before:duration-500 before:ease-in

      after:absolute after:-top-3 after:-mt-px after:block
after:h-2 after:w-10 after:bg-[url('/nav-hamburger-bot.png')] after:bg-cover after:transition after:delay-75 after:duration-500 after:ease-in"
    ></span>
  );
}

function BarX() {
  return (
    <span
      className="absolute bottom-3 -mt-px block h-2 w-10 -rotate-45 bg-[url('/nav-hamburger-bot.png')] bg-cover invert transition delay-75 ease-in

  before:absolute before:-mt-px before:block
  before:h-2  before:w-10 before:-rotate-90 before:bg-[url('/nav-hamburger-bot.png')] before:bg-cover before:transition before:delay-75 before:ease-in

  after:absolute after:-mt-px after:block
after:h-2  after:w-10 after:rotate-45 after:bg-[url('/nav-hamburger-bot.png')] after:bg-cover after:opacity-0 after:transition after:delay-75 after:ease-in"
    ></span>
  );
}
