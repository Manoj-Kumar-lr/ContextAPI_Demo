import React from "react";
import ClassComponent1 from "./ClassComponent1";
import FunctionalComponent from "./FunctionalComponent"

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent1 />
        <FunctionalComponent/>
      </div>
    );
  }
}

export default ClassComponent;
