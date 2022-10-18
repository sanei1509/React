import { useRef } from "react";

const Component = () => {
  const handleClick = () => {
    document.querySelector().select();
  };

  const inputRef = useRef(null);
  return (
    <>
      <h1>Use ref usage</h1>
      <hr />

      <input ref={inputRef} type="text" className="form-control" />
    </>
  );
};
