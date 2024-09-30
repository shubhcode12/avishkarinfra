"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

export function TracingBeamDemo(data:{project:any}) {
  const project = data.project
  return (
    <div className="w-full mt-12">
      <div className="px-8 antialiased w-full pt-4 relative">
        
          <div className="mt-24 w-full mb-10">
            <h2 className="bg-primary text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {/* {project?.badge} */}
            </h2>
 
            <p className={twMerge( "text-4xl font-semibold mb-4")}>
              {project?.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {project?.image && (
                <Image
                  src={project?.image?.link}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg w-full h-[40rem] mb-10 object-cover"
                />
              )}
              <Markdown rehypePlugins={[rehypeRaw]}>{project?.content}</Markdown>
              
            </div>
          </div>
      </div>
    </div>
  );
}
 
