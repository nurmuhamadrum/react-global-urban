import React, { useState } from 'react';
import {
   Box,
   Flex,
   Image,
   Text
} from '@chakra-ui/react';
import { shoesImage, homeIcon } from '../Assets';

export default function CCardCarousel({ value, index}) {
   const [bg, setBg] = useState('white')

   return (
      <Box key={index} w={'240px'} bg={bg} rounded='2xl' boxShadow={'lg'} overflow={'hidden'} marginBottom={5} onMouseOver={() => setBg('#EAEAEA')} onMouseOut={() => setBg('white')}>
         <Image src={shoesImage} alt='shoes' h={'220px'} w={'100%'} objectFit={'cover'} />
         <Box padding={'12px'}>
            <Text marginBottom={'4px'}>Sepatu pria sepatu murah sneakers Sepatu kets Nike</Text>
            <Text marginBottom={'6px'} fontSize={'20px'} fontWeight={'bold'}>Rp. 0</Text>
            <Flex alignItems={'center'} marginBottom={'12px'}>
               <Box background={'pink'} rounded='md' padding={'6px'} marginRight={'8px'}>
                  <Text>100%</Text>
               </Box>
               <Text>Rp. 500.000</Text>
            </Flex>
            <Flex alignItems={'center'}>
               <Image src={homeIcon} alt='home' h={4} w={4} marginRight={2} />
               <Text>Kota Jakarta Pusat</Text>
            </Flex>
         </Box>
      </Box>
   )
}
