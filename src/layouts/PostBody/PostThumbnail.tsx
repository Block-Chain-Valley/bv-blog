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
        image={{ ...phoneThumbnail, layout: "constrained" }}
        alt="Thumbnail"
        className="tablet:!hidden pc:!hidden"
      />
      <GatsbyImage
        image={{ ...thumbnail, layout: "constrained" }}
        alt="Thumbnail"
        className="phone:!hidden pc:!hidden"
      />
      <GatsbyImage
        image={{ ...thumbnail, layout: "fixed", width: 800, height: 400 }}
        alt="Thumbnail"
        className="phone:hidden tablet:hidden"
      />
    </>
  );
};
