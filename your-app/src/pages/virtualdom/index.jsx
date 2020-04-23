import React from "react";

/**
 * 1,用JS对象模拟dom树
 *      1,dom节点包括 节点类型，属性，子节点
 * 2,
 */
function Index() {
  function element(tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
  }
 
  //   function unload() {
  //     window.addEventListener("beforeunload", function (event) {
  //       console.log("I am the 2nd one.");
  //     });
  //     window.addEventListener("unload", function (event) {
  //         debugger
  //       console.log("I am the 4th and last one…");
  //     });
  //   }
  //   unload();

  //   window.unload = (e) => {
  //     console.log(e);
  //     debugger
  //   };
  return <h1>虚拟Dom</h1>;
}

export default Index;
