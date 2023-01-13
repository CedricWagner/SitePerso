import React, { FC } from "react";
import DOMPurify from "dompurify";

interface DangerousHtmlContainerProps {
  html: string;
}

const DangerousHtmlContainer: FC<DangerousHtmlContainerProps> = ({ html }) => (
  <div
    data-testid="DangerousHtmlContainer"
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
  ></div>
);

export default DangerousHtmlContainer;
