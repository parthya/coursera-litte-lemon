import React from "react";

const Header = (props) => {
  const { children } = props;
  return <header className="section">{children}</header>;
};

export default Header;
