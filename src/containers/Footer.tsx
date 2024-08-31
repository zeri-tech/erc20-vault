import { FC } from "react";
import ExternalLink from "../components/ExternalLink";

const Footer: FC = () => {
  return (
    <footer className="flex items-center justify-center p-4 mt-20">
      <p>
        &copy;{" "}
        <ExternalLink href="https://zeri.tech" hideIcon>
          zeri.tech
        </ExternalLink>{" "}
        &bull;{" "}
        <ExternalLink href="https://github.com/zeri-tech/erc20-vault">
          GitHub repository
        </ExternalLink>
      </p>
    </footer>
  );
};

export default Footer;
