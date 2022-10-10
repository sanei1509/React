import Editor from "@monaco-editor/react";

const EditorBox = () => {
  return (
    <div className="editor-container">
      <Editor height="100vh" theme="vs-dark" defaultLanguage="javascript" />;
    </div>
  );
};

export default EditorBox;
