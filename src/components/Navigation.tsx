import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core/";
import LayersIcon from "@material-ui/icons/Layers";
import { usePageVars } from "./PageVars";
import { useAuth } from "./AppAuth";

export default function Navigation() {
  const [localNavKey, setLocalNavKey] = useState("");
  const { navKey } = usePageVars();
  const { signedIn } = useAuth();

  useEffect(() => {
    setLocalNavKey(navKey);
  }, [navKey]);
  return (
    <List>
      <ListItem
        button
        key="quote"
        selected={localNavKey === "quote"}
        component={NavLink}
        to="/"
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Quote" />
      </ListItem>

      <ListItem
        button
        key="quotelist"
        selected={localNavKey === "quotelist"}
        component={NavLink}
        to="/quotelist"
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Quote List" />
      </ListItem>
      {/*
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
      */}
      {signedIn && <AmplifySignOut button-text="Custom Text" />}
    </List>
  );
}
