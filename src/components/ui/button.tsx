import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "navy" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "brand-gradient text-white shadow-sm hover:opacity-95 hover:shadow-md",
  navy: "bg-navy text-white shadow-sm hover:bg-navy-soft",
  ghost: "text-navy hover:bg-surface",
  outline:
    "border border-white/30 text-white hover:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

/**
 * CTA principal de la landing : un lien stylé en bouton.
 */
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "btn-motion inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);

ButtonLink.displayName = "ButtonLink";
