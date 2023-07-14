import { Box } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
    return(
        <>
            <Box as='nav'>
                <a href="">pagina principal</a>
                <a href="">sobre mi</a>
                <a href="">habilidades</a>
                <a href="">caracteristicas</a>
                <a href="">portfolio</a>
                <a href="">contacto</a>
            </Box>
        </>
    )
}

export { Navbar }