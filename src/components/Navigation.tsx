import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { generatePath } from "react-router";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LayersIcon from "@material-ui/icons/Layers";
import { usePageVars } from "./PageVars";

export default function Navigation() {
  const [localNavKey, setLocalNavKey] = useState("");
  const { navKey } = usePageVars();

  useEffect(() => {
    setLocalNavKey(navKey);
  }, [navKey]);
  return (
    <List>
      <ListItem
        button
        key="home"
        selected={localNavKey === "home"}
        component={NavLink}
        to="/"
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        key="dashboard"
        selected={localNavKey === "dashboard"}
        component={NavLink}
        to="/dashboard"
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        button
        key="outreach"
        selected={localNavKey === "outreach"}
        component={NavLink}
        to="/outreach"
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Outreach" />
      </ListItem>
      <ListItem
        button
        key="userinfo"
        selected={localNavKey === "userinfo"}
        component={NavLink}
        to="/userinfo"
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="User Info" />
      </ListItem>
      <ListItem
        button
        key="farmlist"
        selected={localNavKey === "farmlist"}
        component={NavLink}
        to="/farmlist"
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Farm List" />
      </ListItem>
      <ListItem
        button
        key="farm1"
        selected={localNavKey === "farm1"}
        component={NavLink}
        to={() =>
          generatePath("/farm/:farmName/:visitDate", {
            farmName: "farm1",
            visitDate: "1985-01-01",
          })
        }
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Farm" />
      </ListItem>
      <AmplifySignOut button-text="Custom Text" />
    </List>
  );
}
