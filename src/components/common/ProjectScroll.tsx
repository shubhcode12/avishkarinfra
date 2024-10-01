"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function TracingBeamDemo(data: { project: any }) {
  const project = data.project;
  return (
    <div className="w-full max-w-screen-2xl">
      <div className="px-8 antialiased w-full pt-4 relative">
        <div className="w-full mb-10">
          <div className="text-sm  prose prose-sm dark:prose-invert">
            {project?.image && (
              <img
                src={project?.image?.link}
                alt="blog thumbnail"
                className="rounded-lg w-full aspect-video mb-10 object-cover"
              />
            )}

            <div className="flex flex-col lg:w-1/2 pb-8">
              <div className="flex flex-row gap-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span className="text-sm font-semibold">
                    {project?.category!}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span className="text-sm font-semibold">
                    {project?.address!}
                  </span>
                </div>
              </div>

              <div className="text-4xl lg:text-6xl font-medium mt-4">
                {project?.title}
              </div>
            </div>
            <Markdown rehypePlugins={[rehypeRaw]}>{project?.content}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
