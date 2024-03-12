import React, { HTMLAttributes } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

export const LinkHoverMenu = ({ open, onClose, ...rest }: Props) => {
  return (
    <div
      className={`top-11 w-screen flex flex-col  ${
        open ? "h-[calc(100vh-2.75rem)]" : "h-0"
      } transition-all`}
    >
      <div className={`${open ? "block" : "hidden"} min-h-60 bg-slate-50 `}>
        hello
      </div>
      <div
        {...rest}
        className={`grow bg-slate-50/80 ${
          open ? "backdrop-blur-0" : "backdrop-blur-sm"
        } `}
        onMouseOver={onClose}
      />
    </div>
  );
};
