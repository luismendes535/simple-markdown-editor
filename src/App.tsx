import MarkdownRenderer from "./components/MarkdownRenderer/MarkdownRenderer";
import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <h1>Markdown Editor</h1>
      <main>
        <MarkdownRenderer />
      </main>
    </div>
  );
};

export default App;
