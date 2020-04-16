import React, { useState, useEffect } from "react";
import "./index.less";
import Reactdemo from "./reactdemo";
import { Button } from "antd";
import YourHook from "./yourHook";
const Index = () => {
  // 1，简单的hello word
  const element = <h1>hello word</h1>;
  //2,元素渲染
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const id = setInterval(() => {
      // setTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  //3,组件  自定义组件
  function Welcome() {
    return <h1>hello 组件</h1>;
  }
  //4 组合组件
  function MergeWelcome() {
    return (
      <>
        <Welcome />
        <h2>我来学习组件了！</h2>
      </>
    );
  }
  //5生命周期
  function onClick() {
    setTime(new Date().toLocaleString());
  }
  //条件渲染
  const [isHide, setIsHide] = useState(true);
  function show() {
    setIsHide(!isHide);
  }
  //ref
  const ref = React.createRef();
  console.log(ref, "ref");
  //高阶组件HOC
  function Componentx(params) {
    return "高阶组件";
  }
  function Hoc(component) {
    return (
      <div>
        我是
        <Componentx />
      </div>
    );
  }

  //自定义hook
  const [nowData, setNowData] = YourHook([]);
  function hookClick() {
    setNowData([1, 2, 3, 4,5]);
  }
  return (
    <>
      {element}
      {time}

      <Welcome />
      <MergeWelcome />
      <textarea className="pStyle" defaultValue=""></textarea>

      <Reactdemo />
      <Button onClick={show}>
        {isHide ? <div>显示</div> : <div>隐藏</div>}
      </Button>
      <Button onClick={onClick}>生命周期</Button>

      <Hoc />

      <Button onClick={hookClick}>点击自定义hook</Button>
      {nowData}
    </>
  );
};
export default Index;
