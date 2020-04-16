import React, { Component } from "react";
import { message, Button } from "antd";
import Children from "./children";
class Reactdemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateTest: 1,
      hasError: false,
    };
    this.ref = React.createRef();
  }
  componentWillMount() {
    message.info("渲染之前");
  }
  componentDidMount() {
    message.info("渲染完成");
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
    // message.info("接受新下一个的props", nextProps, nextState);
  }
  componentWillReceiveProps(newProps) {
    //   return false
    message.info("接受新的props", newProps);
  }
  componentWillUpdate() {
    message.info("更新之前");
  }
  componentDidUpdate() {
    message.info("更新之后");
  }
  componentWillUnmount() {
    message.info("卸载");
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
    // logErrorToMyService(error, errorInfo);
  }

  onClick = () => {
    // undefined.map(item=>item)
    //   const brr = [1,2,3].map(item=><div>{item}</div>)
    this.setState({ stateTest: this.state.stateTest + 1 });
    // React.forwardRef((props, ref) => (
    //    <div ref={ref}>22</div>
    // ))}
    // console.log(this.ref);
  };
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div>
        <Children ref={this.ref} />
        {this.state.stateTest}
        <Button onClick={this.onClick}>点击+1</Button>
      </div>
    );
  }
}

export default Reactdemo;
