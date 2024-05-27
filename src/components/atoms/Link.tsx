import NextLink, { LinkProps } from "next/link";
import { appConfig } from "../../lib/consts/appConfig";

type _Link =
  | {
      type: "internal";
      path: string;
    }
  | {
      type: "external";
      url: string;
    };
export function Link(props: Omit<LinkProps, "href"> & _Link) {
  if (props.type === "internal") {
    const _props = { ...props, href: `${appConfig.siteBaseUrl}${props.path}` };
    return <NextLink {..._props} />;
  } else {
    const _props = {
      ...props,
      href: props.url,
      target: "_blank",
      rel: "noopener noreferrer nofollow",
    };
    return <a {..._props} />;
  }
}
