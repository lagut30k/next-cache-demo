import NextLink, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes, forwardRef } from "react";

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    prefetch?: boolean;
  };

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { prefetch = false, ...props },
  ref
) {
  return <NextLink ref={ref} prefetch={prefetch} {...props} />;
});

export default Link;
