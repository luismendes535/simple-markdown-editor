import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import MarkdownEditor from "./MarkdownEditor";

describe("<MarkdownEditor />", () => {
  it("should render the textarea with the correct initial value", () => {
    const initialText = "Initial markdown";
    render(
      <MarkdownEditor markdownText={initialText} handleChange={() => {}} />
    );

    const textarea = screen.getByLabelText("Markdown text area");
    expect(textarea.innerHTML).toBe(initialText);
  });

  it("should call handleChange when the textarea value changes", () => {
    const handleChange = vi.fn();
    const initialText = "Initial markdown";
    render(
      <MarkdownEditor markdownText={initialText} handleChange={handleChange} />
    );

    const textarea = screen.getByLabelText("Markdown text area");
    fireEvent.change(textarea, { target: { value: "New markdown text" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should render the placeholder text", () => {
    render(<MarkdownEditor markdownText="" handleChange={() => {}} />);

    const textarea = screen.getByLabelText("Markdown text area");
    expect(textarea).toHaveProperty(
      "placeholder",
      "Enter your markdown here..."
    );
  });
});
