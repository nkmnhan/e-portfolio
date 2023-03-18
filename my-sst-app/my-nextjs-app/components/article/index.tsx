import { title } from "process";
import { compareAsc, format } from 'date-fns'

export type ArticleProp = {
  date: Date;
  title: string;
  description: string;
  role: string
  responsibility: string;
  url?: string;
};

function readArticle(url: string | undefined) {
  if (url) {
    return (
      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
      >
        Read article
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="ml-1 h-4 w-4 stroke-current"
        >
          <path
            d="M6.75 5.75 9.25 8l-2.5 2.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    );
  }
}

function smTimePoint(date: Date) {
    return (
    <time
      className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500 md:hidden"
      dateTime={format(date, 'MM-dd-yyyy')}
    >
      <span
        className="absolute inset-y-0 left-0 flex items-center"
        aria-hidden="true"
      >
        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
      </span>
      {format(date, 'LLL d, yyyy')}
    </time>
  );
}

function mdTimePoint(date: Date) {
  return (
    <time className="mt-1 md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" dateTime="2022-07-14">{format(date, 'LLL yyyy')}</time>
);
}

export default function Article({ props }: { props: ArticleProp }) {
  return (
    <>
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <div className="group relative flex flex-col items-start md:col-span-3">
          <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
            <a href={props.url}>
              <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">{props.title}</span>
            </a>
          </h2>
          {smTimePoint(props.date)}
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 italic">
            {props.role}
          </p>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {props.description}
          </p>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-semibold">Main responsibilities:</p>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          - TBC
          </p>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-semibold">Main 
          Technologies:</p>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          - TBC
          </p>
          {readArticle(props.url)}
        </div>
        {mdTimePoint(props.date)}
      </article>
    </>
  );
}