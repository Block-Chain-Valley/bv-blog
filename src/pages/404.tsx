import Seo from "@/components/Seo/Seo";
import { Header } from "@/layouts";
import { blogConfig } from "@/utils";
import { PageProps, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";

const NotFoundPage: React.FC<PageProps> = () => {
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <>
      <Seo title={blogConfig.title} description={blogConfig.description} />
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
        <StaticImage
          src="../assets/images/Cat.png"
          alt="Cat"
          placeholder="none"
          layout="fixed"
          height={144}
          className="pc:hidden"
        />
        <StaticImage
          src="../assets/images/Cat.png"
          alt="Cat"
          placeholder="none"
          layout="fixed"
          height={400}
          className="mobile:hidden"
        />
        <p className="text-20/regular text-theme-black">홈 화면으로 이동 중이예요.</p>
        <div className="flex flex-col items-center justify-center">
          <button type="button" className="text-16/regular text-theme-gray" onClick={() => navigate("/")}>
            홈 화면이 나타나지 않나요?
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
