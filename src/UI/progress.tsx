import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "./utils";

interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value: number;
}

export function Progress({ className, value, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      className={cn(
        "bg-slate-700 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="bg-slate-300 h-full w-full transition-transform duration-300"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}