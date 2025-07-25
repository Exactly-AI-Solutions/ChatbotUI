"use client";

import { Thread } from "@/components/thread";
import { StreamProvider } from "@/providers/Stream";
import { ThreadProvider } from "@/providers/Thread";
import { ArtifactProvider } from "@/components/thread/artifact";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function DemoPage(): React.ReactNode {
  return (
    <ThemeProvider>
      <React.Suspense fallback={<div>Loading (layout)...</div>}>
        <Toaster />
        <ThreadProvider>
          <StreamProvider>
            <ArtifactProvider>
              <Thread />
            </ArtifactProvider>
          </StreamProvider>
        </ThreadProvider>
      </React.Suspense>
    </ThemeProvider>
  );
}
