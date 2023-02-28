import React, { FC } from "react";
import DOMPurify from "dompurify";

interface DangerousHtmlContainerProps {
  html: string;
  className?: string;
}

const DangerousHtmlContainer: FC<DangerousHtmlContainerProps> = ({
  html,
  className,
}) => (
  <div
    data-testid="DangerousHtmlContainer"
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    className={className + " text-editor"}
  ></div>
);

export default DangerousHtmlContainer;
