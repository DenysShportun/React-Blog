import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material"

import React from "react"

import PostImage2 from "../../images/image2.jpg"
import PostImage3 from "../../images/image3.jpg"
import PostImage4 from "../../images/image4.jpg"

type Props = {}

const RightBar = (props: Props) => {
    return (
        <Box>
            <Typography align="center" bgcolor={"black"} color="yellow">
                Most Popular
            </Typography>
            <List
                sx={{
                    width: "100%",
                    height: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar
                            src={PostImage4}
                            sx={{ height: 80, width: 80 }}
                            alt="Remy Sharp"
                            variant="square"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={
                            " — I'll be in your neighborhood doing errands this…"
                        }
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar
                            src={PostImage3}
                            sx={{ height: 80, width: 80 }}
                            alt="Remy Sharp"
                            variant="square"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={
                            " — I'll be in your neighborhood doing errands this…"
                        }
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar
                            src={PostImage2}
                            sx={{ height: 80, width: 80 }}
                            alt="Remy Sharp"
                            variant="square"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={
                            " — I'll be in your neighborhood doing errands this…"
                        }
                    />
                </ListItem>
                <Divider variant="inset" component={"li"}></Divider>
            </List>
        </Box>
    )
}

export default RightBar
