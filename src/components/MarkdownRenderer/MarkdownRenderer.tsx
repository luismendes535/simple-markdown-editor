import React, { FC, useState } from "react";
import { MarkdownPreview } from "../MarkdownPreview";
import { MarkdownEditor } from "../MarkdownEditor";
import "./MarkdownRenderer.scss";

const MarkdownRenderer: FC = () => {
  const [markdownText, setMarkdownText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className="markdown-renderer">
      <div className="markdown-renderer__content">
        <MarkdownEditor
          markdownText={markdownText}
          handleChange={handleChange}
        />
        <MarkdownPreview markdownText={markdownText} />
      </div>
    </div>
  );
};

export default MarkdownRenderer;
