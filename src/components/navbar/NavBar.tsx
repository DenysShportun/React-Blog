import React, { useState } from "react"
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    InputBase,
    Menu,
    MenuItem,
} from "@mui/material"
import {
    Facebook,
    Instagram,
    Menu as MenuIcon,
    Twitter,
} from "@mui/icons-material/"
import { styled } from "@mui/system"

type Props = {}

const NavBar = (props: Props) => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    })
    const SocialBox = styled(Box)({
        display: "flex",
        gap: "10px",
    })
    const MenuBox = styled(Box)({
        display: "flex",
        gap: "30px",
    })
    const SearchBox = styled(Box)({
        display: "flex",
        gap: "5px",
    })
    const MenuItems = [
        { Name: "Home", Link: "/" },
        { Name: "Products", Link: "#" },
        { Name: "Portfolio", Link: "#" },

        { Name: "Contact Us", Link: "#" },
        { Name: "Blog", Link: "#" },
    ]
    const [open, SetOpen] = useState(false)
    return (
        <AppBar sx={{ background: "#262533" }} position={"static"}>
            <StyledToolbar>
                <SocialBox>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </SocialBox>
                <MenuBox
                    sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                >
                    {MenuItems.map((item) => (
                        <Typography
                            style={{ cursor: "pointer", fontSize: "14px" }}
                        >
                            {item.Name}
                        </Typography>
                    ))}
                </MenuBox>

                <SearchBox>
                    <InputBase
                        placeholder="Searche..."
                        sx={{ color: "#f9cd3f" }}
                    />
                    <MenuIcon
                        sx={{
                            colo: "#f9cd3f",
                            display: { xs: "block", sm: "block", md: "none" },
                        }}
                        onClick={() => SetOpen(!open)}
                    />
                </SearchBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => SetOpen(!open)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <Box sx={{ width: 350, height: "90vh" }}>
                    {MenuItems.map((item) => (
                        <MenuItem
                            style={{ cursor: "pointer", fontSize: "14px" }}
                        >
                            {item.Name}
                        </MenuItem>
                    ))}
                </Box>
            </Menu>
        </AppBar>
    )
}

export default NavBar
