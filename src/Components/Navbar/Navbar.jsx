import { Box, Link } from '@chakra-ui/react';
import React from 'react';


const Navbar = () => {
    return(
        <>
            <Box as='nav'
            fontSize='14'
            textTransform='uppercase'
            >
                <Link>pagina principal</Link>
                <Link pl='10'>sobre mi</Link>
                <Link pl='10'>habilidades</Link>
                <Link pl='10'>caracteristicas</Link>
                <Link pl='10'>portfolio</Link>
                <Link pl='10'>contacto</Link>
            </Box>
        </>
    )
}

export { Navbar }