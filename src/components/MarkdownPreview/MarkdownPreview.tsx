import { FC } from "react";
import { marked } from "marked";
import "./MarkdownPreview.scss";

interface MarkdownPreviewProps {
  markdownText: string;
}

const MarkdownPreview: FC<MarkdownPreviewProps> = ({ markdownText }) => {
  const createMarkup = () => {
    return { __html: marked(markdownText) };
  };

  return (
    <div
      className="markdown-preview"
      dangerouslySetInnerHTML={createMarkup()}
      data-testid="markdown-preview"
    />
  );
};

export default MarkdownPreview;
