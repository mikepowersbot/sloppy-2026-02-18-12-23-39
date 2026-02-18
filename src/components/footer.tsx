import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Sloppy. All rights reserved.
      </div>
    </footer>
  );
}