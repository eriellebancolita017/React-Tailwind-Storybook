import React from "react";
import { FontFamily } from "../../utils/theme";

export default function AppTypography({ type, colorClassName, font, children }) {
  const classNames = (colorClassName??"text-gray-800 dark:text-gray-50") + " " + FontFamily[font??"font-inter"];
    switch (type) {
      case "H1":
        return <h1 className={`text-h1 font-semibold ${classNames}`}>{children}</h1>;
      case "H2":
        return <h2 className={`text-h2 font-semibold ${classNames}`}>{children}</h2>;
      case "H3":
        return <h3 className={`text-h3 font-semibold ${classNames}`}>{children}</h3>;
      case "PSemibold":
        return <p className={`text-p font-semibold ${classNames}`}>{children}</p>;
      case "PMedium":
        return <p className={`text-p font-medium ${classNames}`}>{children}</p>;
      case "PRegular":
        return <p className={`text-p font-normal ${classNames}`}>{children}</p>;
      case "Caption":
        return <caption className={`text-caption font-normal flex ${classNames}`}>{children}</caption>;
      case "Caption2":
        return <caption className={`text-caption2 font-normal flex ${classNames}`}>{children}</caption>;
      default: return <p className={`text-p font-normal ${classNames}`}>{children}</p>;
    }
}
