import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex w-full rounded-lg border border-border-c bg-bg-1 px-4 py-3 text-sm text-text-1 placeholder:text-text-3 transition-all duration-300 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 disabled:opacity-50 resize-vertical min-h-[120px] font-inter",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
