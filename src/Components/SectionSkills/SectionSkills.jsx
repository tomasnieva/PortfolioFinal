import React from 'react';
import { ContSkills } from '../ContSkills/ContSkills';
import { Box } from '@chakra-ui/react';
import { TextoSkills } from '../TextoSkills/TextoSkills';

const SectionSkills = () => {
    const estiloSkills={
        bg:'gray'
    }
    return(
        <>
            <Box as='section' sx={estiloSkills}>
            <TextoSkills/>
            <ContSkills/>
            </Box>
        </>
    )
}

export { SectionSkills }