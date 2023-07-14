import React from 'react';
import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import { Box } from '@chakra-ui/react';
import { BotonHeader } from '../BotonHeader/BotonHeader';

const Header = () => {
    // estilo
    const estiloHeader={
        bg:'#050202',
        w:'100%',
        h:'6rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        color:'#a19f9f',
    }
    return(
        <>  
            <Box sx={estiloHeader} as='header'>
            <Logo />
            <Navbar/>
            <BotonHeader/>
            </Box>
        </>
    )
}

export { Header }