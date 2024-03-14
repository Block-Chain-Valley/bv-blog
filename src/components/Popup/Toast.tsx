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

// .default_toast {
//     display: inline-flex;
//     padding: 12px 30px 12px 20px;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 10px;
//     border-radius: 20px;
//     background: var(--Transparent-Dark);
//     position: fixed;
//     top: 20px;
//     z-index: 21;
//     color: var(--White, #fff);
//     @extend %medium_M;
//     animation-name: fadeout;
//     animation-duration: 5s;
//     animation-iteration-count: 1;
//     animation-fill-mode: both;
//   }
