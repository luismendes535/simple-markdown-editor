import { FC } from "react";
import "./MarkdownEditor.scss";

interface MarkdownEditorProps {
  markdownText: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownEditor: FC<MarkdownEditorProps> = ({
  markdownText,
  handleChange,
}) => {
  return (
    <div className="markdown-editor">
      <textarea
        value={markdownText}
        onChange={handleChange}
        placeholder="Enter your markdown here..."
        aria-label="Markdown text area"
      />
    </div>
  );
};

export default MarkdownEditor;
