import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";


export default function Menu(props) {
  const { menu } = props;
  return (
    <List
    >
      {menu.map((item) => {
        return (
          <>
            <NavLink to={item.path} key={item.name} disablePadding>
              <ListItemText primary={item.name} />
            </NavLink>
            {item.routes && item.routes.map((innerItem) => (
                      <NavLink to={innerItem.path} key={innerItem.name} disablePadding>
                        <ListItemText primary={innerItem.name} />
                      </NavLink>
        ))}
          </>
        );
      })}
    </List>
  );
}
