import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <div className="mt-11">{children}</div>;
};
