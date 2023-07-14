import { Box } from '@chakra-ui/react';
import React from 'react';
import { RedesFooter } from '../RedesFooter/RedesFooter';
import { ContFooter } from '../ContFooter/ContFooter';

const Footer = () => {
    const estiloFooter={
        bg:'#C42CAB'
    }
    return(
        <>
            <Box sx={estiloFooter} as='section'>
                <RedesFooter/>
                <ContFooter/>
            </Box>
        </>
    )
}

export { Footer }