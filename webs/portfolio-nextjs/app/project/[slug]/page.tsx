"use client";

import { useEffect } from "react";
import { useProjectContext } from "./layout";

export default function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { projectId, setProjectId } = useProjectContext();

  useEffect(() => {
    params.then(({ slug }) => {
      setProjectId(slug);
    });
  }, [params, setProjectId]);

  return <div>Project Page {projectId}</div>;
}