import React from "react";
import { StyledImg } from "../../StyledComp";
import { Tabs, Tab } from "@material-ui/core";
import "./styles.scss";
import { NavLink } from "react-router-dom";

function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="header">
      <StyledImg src={require("../../../assets/image/DayTraderHead_red.gif")} />
      <div className="header__tab">
        <Tabs
          textColor="secondary"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Home" component={NavLink} to="/home" />
          <Tab label="Trading & Portfolios" component={NavLink} to="/trading-portfolios" />
          <Tab label="Configuration" component={NavLink} to="/configuration" />
          <Tab label="Primitives" component={NavLink} to="/primitives" />
          <Tab label="FAQ" component={NavLink} to="/faq" />
        </Tabs>
      </div>
    </div>
  );
}

export default Header;
