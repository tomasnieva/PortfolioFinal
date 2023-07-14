import React from 'react';
import { TextoWorks } from '../TextoWorks/TextoWorks';
import { ContWork } from '../ContWork/ContWork';
import { Box } from '@chakra-ui/react';

const SectionWork = () => {
    const estiloFeatures={
        bg:'orange'
    }
    return(
        <>  
            <Box sx={estiloFeatures} as='section'>
            <TextoWorks/>
            <ContWork/>
            </Box>
        </>
    )
}

export { SectionWork }