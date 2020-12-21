import './App.css';
import React from "react"
import axios from "axios"
export default

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  }
}
componentDidMount=()  => {
axios.get("/jupiter").then(response => {
  console.log(response);
});
};

render() {
  return (
    <div>
    <h1>hello</h1>
  </div>
  );
  }
}
