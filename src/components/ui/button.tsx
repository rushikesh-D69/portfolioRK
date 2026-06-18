import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-350 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "btn-primary-glow text-white px-7 py-3 text-sm",
        secondary:
          "btn-glass text-text-2 hover:text-white px-7 py-3 text-sm",
        ghost:
          "bg-transparent text-text-2 hover:text-white px-5 py-2 text-sm",
        filter:
          "btn-glass text-text-2 text-sm px-4 py-2 hover:text-white",
        "filter-active":
          "bg-primary/15 border border-primary/30 text-primary text-sm px-4 py-2",
      },
      size: {
        default: "px-7 py-3 text-sm",
        sm:      "px-5 py-2 text-sm",
        icon:    "w-10 h-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        suppressHydrationWarning
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
