import { Box } from '@chakra-ui/react';
import React from 'react';

const ContFooter = () => {
    return(
        <>
            <Box>
                <h2>enlace rapido</h2>
                <a href="">pagina principal</a>
                <a href="">sobre mi</a>
                <a href="">habilidades</a>
                <a href="">caracteristicas</a>
                <a href="">portfolio</a>
                <a href="">contacto</a>
            </Box>
            <Box>
                <h2>recursos</h2>
                <a href="">autenticacion</a>
                <a href="">estado del sistema</a>
                <a href="">terminos de servicio</a>
                <a href="">referencias API</a>
                <a href="">soporte</a>
                <a href="">fuente abierta</a>
            </Box>
        </>
    )
}

export { ContFooter }