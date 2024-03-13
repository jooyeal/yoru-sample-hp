import React, { HTMLAttributes } from "react";
import { Link } from "..";

type Props = {
  open: boolean;
  onClose: () => void;
  sections?: {
    title: string;
    linkList: { title: string; to: string }[];
  }[];
} & HTMLAttributes<HTMLDivElement>;

export const LinkHoverMenu = ({ open, onClose, sections, ...rest }: Props) => {
  return (
    <div
      className={`top-11 w-screen flex flex-col  ${
        open ? "h-[calc(100vh-2.75rem)]" : "h-0"
      } transition-all`}
    >
      <div
        className={`${
          open ? "block" : "hidden"
        } min-h-60 bg-slate-50 flex px-20 py-10`}
      >
        {sections?.map((section, sectionIndex) => (
          <section
            className={`${
              sectionIndex === 0 ? "mr-14" : "mr-10"
            } flex flex-col items-start`}
            key={sectionIndex}
          >
            <p className="text-sm text-slate-500 font-light">{section.title}</p>
            {section.linkList.map((link, index) => (
              <Link
                key={index}
                className={sectionIndex === 0 ? "font-semibold text-2xl" : ""}
                title={link.title}
                to={link.to}
              />
            ))}
          </section>
        ))}
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
