import NextLink from "next/link";
import { useMemo } from "react";

export default function Link(props) {
  const { children } = props;

  const _props = useMemo(() => {
    const newProps = { ...props };
    delete newProps.children;
    return newProps;
  }, [props]);

  return (
    <NextLink {..._props}>
      <a>{children}</a>
    </NextLink>
  );
}
