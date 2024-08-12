import React, { FC, useState } from "react";
import { MarkdownPreview } from "../MarkdownPreview";
import { MarkdownEditor } from "../MarkdownEditor";
import "./MarkdownRenderer.scss";

const MarkdownRenderer: FC = () => {
  const [markdownText, setMarkdownText] = useState("");
  const [renderedText, setRenderedText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
  };

  const handleRenderClick = () => {
    setRenderedText(markdownText);
  };

  return (
    <div className="markdown-renderer">
      <div className="markdown-renderer__content">
        <MarkdownEditor
          markdownText={markdownText}
          handleChange={handleChange}
        />
        <MarkdownPreview markdownText={renderedText} />
      </div>
      <button
        onClick={handleRenderClick}
        className="markdown-renderer__button"
        aria-label="Render Markdown"
      >
        Render
      </button>
    </div>
  );
};

export default MarkdownRenderer;
