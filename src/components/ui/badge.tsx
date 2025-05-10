import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-sm hover:from-indigo-700 hover:to-purple-700",
        secondary:
          "bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100",
        destructive: "bg-red-50 text-red-700 border-red-100 hover:bg-red-100",
        outline:
          "bg-white text-gray-700 border-gray-300 shadow-sm hover:bg-gray-50",
        premium:
          "bg-gradient-to-r from-amber-500 to-amber-600 text-white border-transparent shadow-lg hover:from-amber-600 hover:to-amber-700",
      },
      size: {
        default: "text-sm px-3 py-1",
        sm: "text-xs px-2 py-0.5",
        lg: "text-base px-4 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
