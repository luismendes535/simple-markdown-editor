import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("should render the header with the correct text", () => {
    render(<App />);

    const header = screen.getByRole("heading", { name: /Markdown Editor/i });
    expect(header).toBeDefined();
  });

  it("should render the main element", () => {
    render(<App />);

    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeDefined();
  });

  it("should render the MarkdownRenderer component", () => {
    render(<App />);

    const markdownRenderer = screen.getByTestId("markdown-renderer");
    expect(markdownRenderer).toBeDefined();
  });

  it("should apply the correct class to the app container", () => {
    render(<App />);

    const appContainer = screen.getByRole("main").parentElement;
    expect(appContainer?.classList.contains("app-container")).toBe(true);
  });
});
