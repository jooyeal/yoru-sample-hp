import { Link, LinkHoverMenu } from "@/shared/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {
  title: string;
  to: string;
};

export const MenuButton = ({ title, to }: Props) => {
  const { locale } = useRouter();

  return <Link className="text-xs" title={title} to={`${to}/${locale}`} />;
};
