import { Box, Stack, Typography } from "@mui/material"
import { styled } from "@mui/system"
import "./Categories.scss"

import React from "react"

const StyledTypography = styled(Typography)({
    /* margin: "25% 50px 25% 50px",*/
    background: "white",
    opacity: "0.8",
})

type Props = {}

const Categories = (props: Props) => {
    return (
        <Box>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                mt={5}
            >
                <Box className="KidsBox">
                    <StyledTypography align="center" variant="h3">
                        Kids
                    </StyledTypography>
                </Box>
                <Box className="WomenBox">
                    <StyledTypography align="center" variant="h3">
                        Man
                    </StyledTypography>
                </Box>
                <Box className="MenBox">
                    <StyledTypography align="center" variant="h3">
                        Women
                    </StyledTypography>
                </Box>
            </Stack>
        </Box>
    )
}

export default Categories
