import React, { FC, useState, useEffect } from "react";
import { MarkdownPreview } from "../MarkdownPreview";
import { MarkdownEditor } from "../MarkdownEditor";
import "./MarkdownRenderer.scss";

const LOCAL_STORAGE_KEY = "markdownText";

const MarkdownRenderer: FC = () => {
  const [markdownText, setMarkdownText] = useState("");

  useEffect(() => {
    const savedMarkdown = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedMarkdown) {
      setMarkdownText(savedMarkdown);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMarkdownText = e.target.value;
    setMarkdownText(newMarkdownText);
    localStorage.setItem(LOCAL_STORAGE_KEY, newMarkdownText);
  };

  return (
    <div className="markdown-renderer" data-testid="markdown-renderer">
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
