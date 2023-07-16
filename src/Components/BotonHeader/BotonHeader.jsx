import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';

const BotonHeader = () => {
    return(
        <>  
            <ButtonGroup>
                <Button>
                    svg
                </Button>
                <Button
                bg='#ff014f'
                color='white'
                pt='15px'
                pb='15px'
                pl='20px'
                pr='20px'
                borderRadius='5px'
                textTransform='uppercase'
                fontSize='14'
                fontWeight='medium'>
                    comprar ahora
                </Button>
            </ButtonGroup>
        </>
    )
}

export { BotonHeader }