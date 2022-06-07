import React from "react";
import ClassComponent from "./ClassComponent";
import { RootContext } from "./ContextAPI";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Name"
    };
  }

  changeName = (name) => {
    this.setState({
      name: name
    });
  };

  render() {
    const data = {
      state: this.state,
      changeName: this.changeName
    };
    return (
      <RootContext.Provider value={data}>
        <div>
          <h2>Context API </h2>
          <ClassComponent />
        </div>
      </RootContext.Provider>
    );
  }
}

export default App;
