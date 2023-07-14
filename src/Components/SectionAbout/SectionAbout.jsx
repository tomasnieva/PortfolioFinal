import React from 'react';
import { TextoAboutMe } from '../TextoAboutMe/TextoAboutMe';
import { BotonDownload } from '../BotonDownload/BotonDownload';
import { Box } from '@chakra-ui/react';

const SectionAbout = () => {
    const estiloAbout={
        bg:'green'
    }
    return(
        <>
        <Box sx={estiloAbout} as='section'>
        <TextoAboutMe/>
        <BotonDownload/>
        </Box>
        </>
    )
}

export { SectionAbout }