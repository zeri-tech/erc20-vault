import { FC, ReactNode } from "react";
import Legend from "./Legend";

export type LegendWrapperProps = {
  legend: string;
  linkHref?: string;
  linkText?: string;
  children: ReactNode;
};

const LegendWrapper: FC<LegendWrapperProps> = ({
  legend,
  linkHref,
  linkText,
  children,
}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      {children}

      <Legend linkHref={linkHref} linkText={linkText}>
        {legend}
      </Legend>
    </div>
  );
};

export default LegendWrapper;
