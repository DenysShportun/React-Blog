import { Box, Typography } from "@mui/material"
import MaimHeroImage from "../../images/HeroImage.jpg"
import React from "react"

type Props = {}

const MainHero = (props: Props) => {
    return (
        <>
            <Box>
                <Typography
                    align="center"
                    variant="h3"
                    sx={{ fontWeight: 900 }}
                >
                    Fashion <b style={{ color: "#f9cd3f" }}>Blog</b>
                </Typography>
                <Typography
                    align="center"
                    variant="body2"
                    sx={{ fontWeight: 100 }}
                >
                    We make you look the bette of you!
                </Typography>
                <Box
                    sx={{
                        backgroundImage: `url(${MaimHeroImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "black",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: 600,
                        width: "100%",
                    }}
                >
                    <Box>
                        <Box sx={{ background: "white", opacity: "0.8" }}>
                            <Typography
                                variant={"h6"}
                                color="tomto"
                                align="center"
                                pt={8}
                            >
                                Trening Styles
                            </Typography>
                            <Typography variant={"h4"} align="center">
                                Life is Borning without Fashion!
                            </Typography>
                            <Typography variant="body1" align="center" pb={8}>
                                we love tochange your style lorme ipsum
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default MainHero
