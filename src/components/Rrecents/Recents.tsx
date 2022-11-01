import {
    Grid,
    Box,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material"
import IconButton from "@mui/material/IconButton"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import cartImage from "../../images/image3.jpg"
import PostImage1 from "../../images/image1.jpg"
import PostImage2 from "../../images/image2.jpg"
import PostImage3 from "../../images/image3.jpg"
import PostImage4 from "../../images/image4.jpg"

import React from "react"

type Props = {}

const Recents = (props: Props) => {
    return (
        <Box>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 2, sm: 2, md: 1 }}
            >
                <Grid item>
                    <Box>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={cartImage}
                        />
                        <CardContent>
                            <Typography
                                variant="body1"
                                color={"#f9cd3f"}
                                align="center"
                            >
                                PERFUMES
                            </Typography>
                            <Typography
                                variant="h5"
                                align="center"
                                component="div"
                            >
                                Wearing this will make everyone love you
                            </Typography>
                            <Typography
                                variant="body2"
                                align="center"
                                component="div"
                                color="text.secondary"
                            >
                                it's womens love
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                align="center"
                            >
                                Lorem
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                    <Box>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={PostImage1}
                        />
                        <CardContent>
                            <Typography
                                variant="body1"
                                color={"#f9cd3f"}
                                align="center"
                            >
                                PERFUMES
                            </Typography>
                            <Typography
                                variant="h5"
                                align="center"
                                component="div"
                            >
                                Wearing this will make everyone love you
                            </Typography>
                            <Typography
                                variant="body2"
                                align="center"
                                component="div"
                                color="text.secondary"
                            >
                                it's womens love
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                align="center"
                            >
                                Lorem
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={PostImage2}
                        />
                        <CardContent>
                            <Typography
                                variant="body1"
                                color={"#f9cd3f"}
                                align="center"
                            >
                                PERFUMES
                            </Typography>
                            <Typography
                                variant="h5"
                                align="center"
                                component="div"
                            >
                                Wearing this will make everyone love you
                            </Typography>
                            <Typography
                                variant="body2"
                                align="center"
                                component="div"
                                color="text.secondary"
                            >
                                it's womens love
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                align="center"
                            >
                                Lorem
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={PostImage3}
                        />
                        <CardContent>
                            <Typography
                                variant="body1"
                                color={"#f9cd3f"}
                                align="center"
                            >
                                PERFUMES
                            </Typography>
                            <Typography
                                variant="h5"
                                align="center"
                                component="div"
                            >
                                Wearing this will make everyone love you
                            </Typography>
                            <Typography
                                variant="body2"
                                align="center"
                                component="div"
                                color="text.secondary"
                            >
                                it's womens love
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                align="center"
                            >
                                Lorem
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={PostImage4}
                        />
                        <CardContent>
                            <Typography
                                variant="body1"
                                color={"#f9cd3f"}
                                align="center"
                            >
                                PERFUMES
                            </Typography>
                            <Typography
                                variant="h5"
                                align="center"
                                component="div"
                            >
                                Wearing this will make everyone love you
                            </Typography>
                            <Typography
                                variant="body2"
                                align="center"
                                component="div"
                                color="text.secondary"
                            >
                                it's womens love
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                align="center"
                            >
                                Lorem
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Recents
