import React, { useEffect, useState } from "react";
import { StyledImg } from "../../StyledComp";
import { Tabs, Tab } from "@material-ui/core";
import "./styles.scss";
import { NavLink } from "react-router-dom";

function Header() {
  let url = window.location.pathname
  let intialTabIndex = [
    {
      index: 0,
      tabName: "/home",
    },
    {
      index: 1,
      tabName: "/trading-portfolios",
    },
    {
      index: 2,
      tabName: "/configuration",
    },
    {
      index: 3,
      tabName: "/primitives",
    },
    {
      index: 4,
      tabName: "/faq"
    }
  ]
  const [value, setValue] = useState<any>();

  useEffect(() => {
    intialTabIndex.forEach(tab => {
      if (url === tab.tabName) {
        setValue(tab.index);
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  const handleChange = (event: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
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
