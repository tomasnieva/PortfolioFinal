import { Box } from '@chakra-ui/react';
import React from 'react';
import { TextoFeatures } from '../TextoFeatures/TextoFeatures';
import { ContFeatures } from '../ContFeatures/ContFeatures';

const SectionFeatures = () => {
    const estiloFeatures={
        bg:'#26C0AF'
    }
    return(
        <>
            <Box sx={estiloFeatures} as='section'>
                <TextoFeatures/>
                <ContFeatures/>
            </Box>
        </>
    )
}

export { SectionFeatures }