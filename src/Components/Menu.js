
import React from "react";
import { Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function Menu(props){
    const { menu } = props
    return (
            <List>
            {menu.map(item => {
                return (
                    <>
                    <ListItem key={item.name} disablePadding>
                        <ListItemText primary={item.name} />
                        {item.routes && (
                            <List>
                                {item.routes && item.routes.map( innerItem => (
                                    <ListItem key={innerItem.name} disablePadding>
                                        <ListItemText primary={innerItem.name} />
                                </ListItem>
                                ))}
                            </List>
                        )}
                    </ListItem>
                    
                    </>
                )
            })}
            </List>
    )
}