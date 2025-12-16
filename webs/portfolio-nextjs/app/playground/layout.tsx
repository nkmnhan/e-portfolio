"use client";
import dynamic from 'next/dynamic';

// dynamic-import the named export PageTransition to keep this layout a server component
const PageTransition = dynamic(
  () => import('../components/transitions').then((mod) => mod.PageTransition),
  { ssr: false, loading: () => <>{/* optional small placeholder */}</> }
);

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
