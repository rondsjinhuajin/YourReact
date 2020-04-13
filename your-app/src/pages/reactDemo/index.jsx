import React, { useState, useEffect } from "react";
import "./index.less";
const Index = () => {
  // 1，简单的hello word
  const element = <h1>hello word</h1>;
  //2,元素渲染
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  //3,组件
  return (
    <>
      {element}
      {time}
    </>
  );
};
export default Index;
