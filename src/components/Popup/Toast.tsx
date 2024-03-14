import { useToastContext } from "@/context/ToastContext";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export interface ToastProps {
  message: string;
  isPositive: boolean;
}

export default function Toast({ message, isPositive }: ToastProps) {
  const { setToastContext } = useToastContext();
  const clearToast = () => {
    setToastContext(null);
  };

  return (
    <div
      className="animate-fadeout fixed top-7 z-50 inline-flex w-full justify-center"
      tabIndex={0}
      onAnimationEnd={clearToast}
    >
      <div className="flex items-center justify-center gap-3 rounded-[20px] bg-theme-blackTransparent px-5 py-3">
        {isPositive ? (
          <StaticImage
            src="../../assets/icons/Success.png"
            alt="Success"
            placeholder="none"
            width={15}
            height={15}
            loading="eager"
          />
        ) : (
          <StaticImage
            src="../../assets/icons/Error.png"
            alt="Error"
            placeholder="none"
            width={15}
            height={15}
            loading="eager"
          />
        )}

        <div className="text-16/regular text-theme-white">{message}</div>
      </div>
    </div>
  );
}
