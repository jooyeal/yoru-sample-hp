import React from "react";
import { BannerCanvas } from "./banner-canvas";
import { Underlay } from "./underlay";

type Props = {};

export const Banner3D = (props: Props) => {
  return (
    <>
      <Underlay />
      <BannerCanvas />
    </>
  );
};
