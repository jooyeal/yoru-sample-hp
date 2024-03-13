export type TNavigationProps = {
  menuList: {
    title: string;
    to: string;
  }[];
};

export type TLinkHoverMenuSection = {
  title: string;
  linkList: {
    title: string;
    to: string;
  }[];
}[];
