import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

export interface PostThumbnailProps {
  phoneThumbnail: IGatsbyImageData;
  thumbnail: IGatsbyImageData;
}

export const PostThumbnail = ({ phoneThumbnail, thumbnail }: PostThumbnailProps) => {
  return (
    <>
      <GatsbyImage
        className="tablet:hidden pc:hidden"
        image={{ ...phoneThumbnail, layout: "constrained" }}
        alt="Thumbnail"
      />
      <GatsbyImage className="phone:hidden pc:hidden" image={{ ...thumbnail, layout: "constrained" }} alt="Thumbnail" />
      <GatsbyImage
        className="phone:hidden tablet:hidden"
        image={{ ...thumbnail, layout: "fixed", width: 800, height: 400 }}
        alt="Thumbnail"
      />
    </>
  );
};
