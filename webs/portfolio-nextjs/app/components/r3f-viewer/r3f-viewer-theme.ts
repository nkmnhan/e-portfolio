import { createTheme } from "flowbite-react";
import { CustomFlowbiteTheme } from "flowbite-react/types";

export const r3fViewerTheme: CustomFlowbiteTheme = createTheme({
  toggleSwitch: {
    root: {
      base: "group flex rounded-lg focus:outline-none",
      active: {
        on: "cursor-pointer",
        off: "cursor-not-allowed opacity-50",
      },
      label:
        "ms-3 mt-0.5 text-start text-sm font-semibold text-cyan-200 cursor-pointer select-none",
      input: "sr-only",
    },
    toggle: {
      base: "relative rounded-full after:absolute after:rounded-full after:border after:bg-white after:transition-all group-focus:ring-4",
      checked: {
        on: "after:translate-x-full after:border-transparent rtl:after:-translate-x-full",
        off: "bg-gray-600 after:border-gray-500",
        color: {
          cyan: "bg-cyan-600 group-focus:ring-cyan-700/50",
        },
      },
      sizes: {
        sm: "h-5 w-9 min-w-9 after:left-0.5 after:top-0.5 after:h-4 after:w-4 rtl:after:right-0.5",
        md: "h-6 w-11 min-w-11 after:left-0.5 after:top-0.5 after:h-5 after:w-5 rtl:after:right-0.5",
        lg: "h-7 w-13 min-w-13 after:left-0.5 after:top-0.5 after:h-6 after:w-6 rtl:after:right-0.5",
      },
    },
  },
  rangeSlider: {
    root: {
      base: "flex items-center gap-3",
    },
    field: {
      base: "relative w-full",
      input: {
        base: "w-full cursor-pointer appearance-none rounded-lg bg-gray-700 accent-cyan-500",
        sizes: {
          sm: "h-1",
          md: "h-2",
          lg: "h-3",
        },
      },
    },
  },
  select: {
    field: {
      select: {
        base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-700 border-cyan-700/60 text-cyan-100 placeholder-cyan-300/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 hover:border-cyan-600 transition-colors",
        colors: {
          gray: "bg-gray-700 border-cyan-700/60 text-cyan-100 focus:border-cyan-500 focus:ring-cyan-500/50",
        },
        sizes: {
          sm: "p-2 text-xs rounded-lg",
          md: "p-2.5 text-sm rounded-lg",
          lg: "p-3 text-base rounded-lg",
        },
      },
    },
  },
});
