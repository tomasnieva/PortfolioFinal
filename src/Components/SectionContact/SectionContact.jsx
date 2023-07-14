import React from 'react';
import { TextoContact } from '../TextoContact/TextoContact';
import { ContContact } from '../ContContact/ContContact';
import { Box } from '@chakra-ui/react';

const SectionContact = () => {
    const estiloContact={
        bg:'yellow'
    }
    return(
        <>
            <Box sx={estiloContact} as='section'>
                <TextoContact/>
                <ContContact/>
            </Box>
        </>
    )
}

export { SectionContact }