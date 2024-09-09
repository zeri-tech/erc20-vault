import { FC } from "react";
import ExternalLink from "./ExternalLink";

export type LegendProps = {
  children: string;
  linkText?: string;
  linkHref?: string;
};

const Legend: FC<LegendProps> = ({
  children,
  linkText = "Learn more",
  linkHref,
}) => {
  return (
    <span className="pl-1 text-xs">
      <span className="opacity-40">{children}</span>{" "}
      {linkHref !== undefined && (
        <ExternalLink
          hideIcon
          className="text-xs text-blue-400 font-medium"
          href={linkHref}
        >
          {linkText}
        </ExternalLink>
      )}
    </span>
  );
};

export default Legend;
