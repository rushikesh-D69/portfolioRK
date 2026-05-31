import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex w-full rounded-lg border border-border-c bg-bg-1 px-4 py-3 text-sm text-text-1 placeholder:text-text-3 transition-all duration-300 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 disabled:opacity-50 font-inter",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
