"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration and set dark mode
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";

    // Add dark class to html element (we're always using dark mode for this portfolio)
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <body className="antialiased min-h-screen dark" suppressHydrationWarning>
      {children}
    </body>
  );
}
