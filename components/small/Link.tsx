import NextLink, { LinkProps } from "next/link"

import { classNames } from "@/utils/helper"

type CustomLinkType = {
  href?: string
  isExternal?: boolean
} & React.ComponentPropsWithoutRef<"a"> & LinkProps

export const Link: React.FC<CustomLinkType> = ({
  href,
  className,
  isExternal = false,
  children,
  ...props
}) => {
  const externalProps = isExternal && {
    rel: "noreferrer",
    target: "_blank",
  }

  const isRouteLink = href.startsWith("/")

  if (isRouteLink && !isExternal) {
    return (
      <NextLink href={href} passHref>
        <a {...props} className={classNames(className, "duration-100 ease-in-out")}>{children}</a>
      </NextLink>
    )
  }

  return (
    <a href={href} className={classNames(className, "duration-100 ease-in-out")} {...props} {...externalProps}>
      {children}
    </a>
  )
}