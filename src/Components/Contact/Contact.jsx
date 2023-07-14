import { Box } from '@chakra-ui/react';
import React from 'react';
import { RedesContact } from '../RedesContact/RedesContact';

const Contact = () => {
    return(
        <>
                <img src="" alt="" />
            <Box>
                <h1>Tomas Nieva</h1>
                <p>Desarrolador Web</p>
                <p>Estoy disponible para un trabajo Freelance. Contactate conmigo por mis redes sociales</p>
                <p>Telefono: +54 011 5140-2803</p>
                <p>Email: nievatomas18@gmail.com</p>
                <RedesContact/>
            </Box>
        </>
    )
}

export { Contact }