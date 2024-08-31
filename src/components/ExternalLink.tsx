import { FC, ReactNode } from "react";
import { FiExternalLink } from "react-icons/fi";

export type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  hideIcon?: boolean;
};

const ExternalLink: FC<ExternalLinkProps> = ({
  href,
  children,
  hideIcon = false,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex items-center justify-center gap-1 hover:underline"
    >
      {children} {!hideIcon && <FiExternalLink />}
    </a>
  );
};

export default ExternalLink;
