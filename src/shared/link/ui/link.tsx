import { useRouter } from "next/router";
import React, { HTMLAttributes } from "react";

type Props = { title: string; to: string } & HTMLAttributes<HTMLButtonElement>;

export const Link = ({ title, to, ...rest }: Props) => {
  const router = useRouter();
  const onClick = () => {
    router.push(to);
  };

  return (
    <button onClick={onClick} {...rest}>
      {title}
    </button>
  );
};
