import { Box } from '@chakra-ui/react';
import React from 'react';

const Copyright = () => {
    const estiloCopyright={
        bg:'#1DC11E'
    }
    return(
        <>
            <Box sx={estiloCopyright} as='section'>
                <p>© Copyright. Todos los derechos reservados por Tomas Nieva</p>
            </Box>
        </>
    )
}

export { Copyright }