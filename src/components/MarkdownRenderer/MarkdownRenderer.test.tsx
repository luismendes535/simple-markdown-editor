import { render, screen, fireEvent } from "@testing-library/react";
import { describe, beforeEach, expect, vi, it } from "vitest";
import { MarkdownRenderer } from ".";

const LOCAL_STORAGE_KEY = "markdownText";

// Mock localStorage
beforeEach(() => {
  // Clear existing mocks
  vi.clearAllMocks();

  // Set up a mock for localStorage
  vi.spyOn(Storage.prototype, "getItem").mockImplementation((key) => {
    return key === LOCAL_STORAGE_KEY ? "# Saved Markdown" : null;
  });

  vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {});
});

describe("<MarkdownRenderer />", () => {
  it("should load and display saved markdown from localStorage on mount", () => {
    render(<MarkdownRenderer />);

    const textarea = screen.getByPlaceholderText("Enter your markdown here...");
    expect(textarea.innerHTML).toBe("# Saved Markdown");

    const preview = screen.getByTestId("markdown-preview");
    expect(preview.innerHTML).toBe("<h1>Saved Markdown</h1>\n");
  });

  it("should update localStorage when text changes", () => {
    render(<MarkdownRenderer />);

    const textarea = screen.getByPlaceholderText("Enter your markdown here...");
    fireEvent.change(textarea, { target: { value: "# New Markdown" } });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      LOCAL_STORAGE_KEY,
      "# New Markdown"
    );
  });

  it("should render markdown preview on text change", () => {
    render(<MarkdownRenderer />);

    const textarea = screen.getByPlaceholderText("Enter your markdown here...");
    fireEvent.change(textarea, { target: { value: "# New Markdown" } });

    const preview = screen.getByTestId("markdown-preview");
    expect(preview.innerHTML).toBe("<h1>New Markdown</h1>\n");
  });

  it("should display empty state if nothing is saved in localStorage", () => {
    vi.spyOn(Storage.prototype, "getItem").mockReturnValue(null);

    render(<MarkdownRenderer />);

    const textarea = screen.getByPlaceholderText("Enter your markdown here...");
    expect(textarea.nodeValue).toBe(null);

    const preview = screen.getByTestId("markdown-preview");
    expect(preview.innerHTML).toBe("");
  });
});
