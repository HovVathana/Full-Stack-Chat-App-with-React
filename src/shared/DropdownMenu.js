import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

function DropdownMenu({ menuLists, menu, handleMenuClose }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Menu
          id="simple-menu"
          anchorEl={menu}
          keepMounted
          open={Boolean(menu)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          getContentAnchorEl={null}
        >
          {menuLists.map((menuList) => (
            <MenuItem
              selected
              key={menuList.id}
              onClick={menuList.onClick}
              style={{ color: "white" }}
            >
              {menuList.title}
            </MenuItem>
          ))}
        </Menu>
      </ThemeProvider>
    </div>
  );
}

export default DropdownMenu;
