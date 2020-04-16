import React, { Component } from "react";
// import { message, Button } from "antd";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  //错误处理
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log("hasError");
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    //   undefined.map(item=>item)

    return (
      <div>
        {this.state.hasError && <h1>Something went wrong.</h1>}
      </div>
    );
  }
}

export default Index;
