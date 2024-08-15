import { ITypography } from "./types";

export const TypographyH1: React.FC<ITypography> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 pb-7 text-2xl font-bold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};
