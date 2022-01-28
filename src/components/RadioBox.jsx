import { Box, useRadio } from '@chakra-ui/react';
import React from 'react';

function RadioBox(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
         <Box as='label' flex='1 0 130px' maxW='200px'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        // rightIcon={<RegIcon />}
        variant='ghost'
        h='8' 
        flex='1 0 130px'
        maxW='200px' 
        color='white' 
        borderRadius='none' 
        fontSize='14px'
        fontWeight='600'
        boxShadow='none'
        display='flex'
        alignItems='center'
        justifyContent='center'
        _checked={{
            bg: 'inherit',
            border: '1px solid white'
        }}
        _focus={{
          boxShadow: 'none',
        }}
        px={{base: '1', sm: '5'}}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
    );
}

export default RadioBox;