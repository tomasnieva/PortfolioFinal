import { Box } from '@chakra-ui/react';
import React from 'react';
import { Form } from '../Form/Form';
import { Contact } from '../Contact/Contact';

const ContContact = () => {
    return(
        <>
            <Box>
                <Contact/>
                <Form/>
            </Box>
        </>
    )
}

export { ContContact }