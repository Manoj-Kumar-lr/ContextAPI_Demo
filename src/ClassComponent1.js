import React from "react";
import { RootContext } from "./ContextAPI";

// class ClassComponent1 extends React.Component {
//   static contextType = RootContext;

//   render() {
//     console.log(this.context);
//     return (
//       <div>
//         <h2>Name:{this.context.state.name}</h2>
//         <button onClick={() => this.context.changeName("ABC")}>
//           {" "}
//           Change Name
//         </button>
//       </div>
//     );
//   }
// }

class ClassComponent1 extends React.Component {
  render() {
    return (
      <RootContext.Consumer>
        {(props) => {
          console.log(props);
          return (
            <>
              <h2>Name:{props.state.name}</h2>
              <button onClick={() => props.changeName("ABC")}>
                Change Name
              </button>
            </>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

export default ClassComponent1;
