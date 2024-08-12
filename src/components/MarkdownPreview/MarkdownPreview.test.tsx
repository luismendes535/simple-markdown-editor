import { render, screen } from "@testing-library/react";
import MarkdownPreview from "./MarkdownPreview";
import { describe, it, expect } from "vitest";

describe("<MarkdownPreview />", () => {
  it("should render a heading from markdown", () => {
    render(<MarkdownPreview markdownText="# Heading" />);

    const preview = screen.getByTestId("markdown-preview");
    expect(preview.innerHTML).toContain("<h1>Heading</h1>");
  });

  it("should render bold and italic text from markdown", () => {
    render(<MarkdownPreview markdownText="**Bold** and *Italic*" />);

    const preview = screen.getByTestId("markdown-preview");
    expect(preview.innerHTML).toContain("<strong>Bold</strong>");
    expect(preview.innerHTML).toContain("<em>Italic</em>");
  });

  it("should render links from markdown", () => {
    render(<MarkdownPreview markdownText="[OpenAI](https://openai.com)" />);

    const preview = screen.getByTestId("markdown-preview");
    expect(preview.innerHTML).toContain(
      '<a href="https://openai.com">OpenAI</a>'
    );
  });
});
