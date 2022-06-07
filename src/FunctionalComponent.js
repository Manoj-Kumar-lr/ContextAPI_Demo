import React, { useContext } from "react";
import { RootContext } from "./ContextAPI";

const FunctionalComponent = () => {
  const context = useContext(RootContext);
  return (
    <div>
      <h2> Functional Component</h2>
      <h2>Name: {context.state.name}</h2>
      <button onClick={() => context.changeName("ABCD")}>Change Name</button>
    </div>
  );
};

export default FunctionalComponent;
