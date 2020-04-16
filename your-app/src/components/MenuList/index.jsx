import React from "react";
import { Menu, Icon } from "antd";
import { useHistory } from "react-router-dom";
import menuConfig from "../../router/menuConfig";

import "./index.less";
const Index = () => {
  const history = useHistory();
  const handleClick = e => {
    history.push(e.key);
  };

  return (
    <Menu
      mode="horizontal"
      theme="dark"
      onClick={handleClick}
      selectedKeys={[history.location.pathname]}
      className="menuStyle"
    >
      {menuConfig.map(item => (
        <Menu.Item key={item.key}>
          <Icon type={item.icon} />
          <span>{item.title}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
};
export default Index;
