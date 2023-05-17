import React, { FC } from "react";
import DOMPurify from "dompurify";

interface DangerousHtmlContainerProps {
  html: string;
  className?: string;
}

const DangerousHtmlContainer: FC<DangerousHtmlContainerProps> = ({
  html,
  className,
}) => {
  // force external links to open in a new window
  const element = document.createElement("div");
  element.innerHTML = html;
  element.querySelectorAll("a").forEach(function (link) {
    if (link.host !== window.location.host) {
      link.target = "_blank";
      link.rel = "noopener";
    }
  });

  return (
    <div
      data-testid="DangerousHtmlContainer"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(element.innerHTML, {
          ADD_ATTR: ["target", "rel"],
        }),
      }}
      className={className ? className : "" + " text-editor"}
    ></div>
  );
};

export default DangerousHtmlContainer;
