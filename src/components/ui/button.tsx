import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-grad-main text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl",
        secondary:
          "bg-transparent text-white border-2 border-border-c hover:border-primary hover:text-primary hover:-translate-y-0.5",
        ghost:
          "bg-transparent border-2 border-border-c text-text-2 hover:border-primary hover:text-primary",
        filter:
          "bg-bg-2 border-2 border-border-c text-text-2 text-sm hover:border-primary hover:text-primary",
        "filter-active":
          "bg-primary border-2 border-primary text-white text-sm",
      },
      size: {
        default: "px-8 py-3.5 text-base",
        sm:      "px-5 py-2 text-sm",
        icon:    "w-11 h-11",
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
