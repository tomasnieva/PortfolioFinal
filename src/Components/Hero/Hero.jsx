import React from 'react';
import { RedesHero } from '../RedesHero/RedesHero';
import { TextoHero } from '../TextoHero/TextoHero';
import { BotonDownload } from '../BotonDownload/BotonDownload';
import { Box } from '@chakra-ui/react';

const Hero = () => {
    const estiloHero={
        bg:'red'
    }
    return(
        <>
        <Box sx={estiloHero} as='section'>
            <TextoHero/>
            <BotonDownload/>
            <RedesHero/>
        </Box>
        </>
    )
}

export { Hero }