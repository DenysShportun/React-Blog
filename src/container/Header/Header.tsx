import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/system/Container'
import Menu from 'components/Menu/Menu'
import CartHeader from 'components/Cart/CartHeader'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Fake shop
                        </Typography>
                        <Menu />
                        <CartHeader />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header
