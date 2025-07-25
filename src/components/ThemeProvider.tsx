"use client";

import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const primary = searchParams.get("primary")
      ? `#${searchParams.get("primary")}`
      : "oklch(0.205 0 0)";
    const primaryForeground = searchParams.get("primaryForeground")
      ? `#${searchParams.get("primaryForeground")}`
      : "oklch(0.985 0 0)";
    const secondary = searchParams.get("secondary")
      ? `#${searchParams.get("secondary")}`
      : "oklch(0.97 0 0)";
    const radius = searchParams.get("radius") || "0.625rem";
    const muted = searchParams.get("muted")
      ? `#${searchParams.get("muted")}`
      : "oklch(0.97 0 0)";
    const background = searchParams.get("background")
      ? `#${searchParams.get("background")}`
      : "oklch(1 0 0)";
    const foreground = searchParams.get("foreground")
      ? `#${searchParams.get("foreground")}`
      : "oklch(0.145 0 0)";

    // Additional color variables
    const card = searchParams.get("card")
      ? `#${searchParams.get("card")}`
      : "oklch(1 0 0)";
    const cardForeground = searchParams.get("cardForeground")
      ? `#${searchParams.get("cardForeground")}`
      : "oklch(0.145 0 0)";
    const popover = searchParams.get("popover")
      ? `#${searchParams.get("popover")}`
      : "oklch(1 0 0)";
    const popoverForeground = searchParams.get("popoverForeground")
      ? `#${searchParams.get("popoverForeground")}`
      : "oklch(0.145 0 0)";
    const secondaryForeground = searchParams.get("secondaryForeground")
      ? `#${searchParams.get("secondaryForeground")}`
      : "oklch(0.205 0 0)";
    const mutedForeground = searchParams.get("mutedForeground")
      ? `#${searchParams.get("mutedForeground")}`
      : "oklch(0.556 0 0)";
    const accent = searchParams.get("accent")
      ? `#${searchParams.get("accent")}`
      : "oklch(0.97 0 0)";
    const accentForeground = searchParams.get("accentForeground")
      ? `#${searchParams.get("accentForeground")}`
      : "oklch(0.205 0 0)";
    const destructive = searchParams.get("destructive")
      ? `#${searchParams.get("destructive")}`
      : "oklch(0.577 0.245 27.325)";
    const destructiveForeground = searchParams.get("destructiveForeground")
      ? `#${searchParams.get("destructiveForeground")}`
      : "oklch(0.577 0.245 27.325)";
    const border = searchParams.get("border")
      ? `#${searchParams.get("border")}`
      : "oklch(0.922 0 0)";
    const input = searchParams.get("input")
      ? `#${searchParams.get("input")}`
      : "oklch(0.922 0 0)";
    const ring = searchParams.get("ring")
      ? `#${searchParams.get("ring")}`
      : "oklch(0.87 0 0)";

    // Chart colors
    const chart1 = searchParams.get("chart1")
      ? `#${searchParams.get("chart1")}`
      : "oklch(0.646 0.222 41.116)";
    const chart2 = searchParams.get("chart2")
      ? `#${searchParams.get("chart2")}`
      : "oklch(0.6 0.118 184.704)";
    const chart3 = searchParams.get("chart3")
      ? `#${searchParams.get("chart3")}`
      : "oklch(0.398 0.07 227.392)";
    const chart4 = searchParams.get("chart4")
      ? `#${searchParams.get("chart4")}`
      : "oklch(0.828 0.189 84.429)";
    const chart5 = searchParams.get("chart5")
      ? `#${searchParams.get("chart5")}`
      : "oklch(0.769 0.188 70.08)";

    // Sidebar colors
    const sidebar = searchParams.get("sidebar")
      ? `#${searchParams.get("sidebar")}`
      : "oklch(0.985 0 0)";
    const sidebarForeground = searchParams.get("sidebarForeground")
      ? `#${searchParams.get("sidebarForeground")}`
      : "oklch(0.145 0 0)";
    const sidebarPrimary = searchParams.get("sidebarPrimary")
      ? `#${searchParams.get("sidebarPrimary")}`
      : "oklch(0.205 0 0)";
    const sidebarPrimaryForeground = searchParams.get(
      "sidebarPrimaryForeground",
    )
      ? `#${searchParams.get("sidebarPrimaryForeground")}`
      : "oklch(0.985 0 0)";
    const sidebarAccent = searchParams.get("sidebarAccent")
      ? `#${searchParams.get("sidebarAccent")}`
      : "oklch(0.97 0 0)";
    const sidebarAccentForeground = searchParams.get("sidebarAccentForeground")
      ? `#${searchParams.get("sidebarAccentForeground")}`
      : "oklch(0.205 0 0)";
    const sidebarBorder = searchParams.get("sidebarBorder")
      ? `#${searchParams.get("sidebarBorder")}`
      : "oklch(0.922 0 0)";
    const sidebarRing = searchParams.get("sidebarRing")
      ? `#${searchParams.get("sidebarRing")}`
      : "oklch(0.87 0 0)";

    const cssVars = {
      "--primary": primary,
      "--primary-foreground": primaryForeground,
      "--secondary": secondary,
      "--radius": radius,
      "--muted": muted,
      "--background": background,
      "--foreground": foreground,
      "--card": card,
      "--card-foreground": cardForeground,
      "--popover": popover,
      "--popover-foreground": popoverForeground,
      "--secondary-foreground": secondaryForeground,
      "--muted-foreground": mutedForeground,
      "--accent": accent,
      "--accent-foreground": accentForeground,
      "--destructive": destructive,
      "--destructive-foreground": destructiveForeground,
      "--border": border,
      "--input": input,
      "--ring": ring,
      "--chart-1": chart1,
      "--chart-2": chart2,
      "--chart-3": chart3,
      "--chart-4": chart4,
      "--chart-5": chart5,
      "--sidebar": sidebar,
      "--sidebar-foreground": sidebarForeground,
      "--sidebar-primary": sidebarPrimary,
      "--sidebar-primary-foreground": sidebarPrimaryForeground,
      "--sidebar-accent": sidebarAccent,
      "--sidebar-accent-foreground": sidebarAccentForeground,
      "--sidebar-border": sidebarBorder,
      "--sidebar-ring": sidebarRing,
    };

    const root = document.documentElement;

    Object.entries(cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [searchParams]);

  return <>{children}</>;
}
