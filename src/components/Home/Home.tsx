import { Box, Stack, Container } from "@mui/material"
import React from "react"
import MainHero from "components/MainHero/MainHero"
import Categories from "components/Category/Categories"
import Recents from "components/Rrecents/Recents"
import RightBar from "components/RightBar/RightBar"

type Props = {}

const Home = (props: Props) => {
    return (
        <Box>
            <MainHero />
            <Container>
                <Categories />
                <hr />
                <Stack direction={"row"} spacing={8} mt={8}>
                    <Box
                        flex={3} /*sx={{ padding: "18px 100px 100px 100px" }}*/
                    >
                        <Recents />
                    </Box>
                    <Box flex={1}>
                        <RightBar />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Home
