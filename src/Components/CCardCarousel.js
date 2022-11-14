import React, { useState } from 'react';
import {
   Box,
   Flex,
   Image,
   Text
} from '@chakra-ui/react';
import { shoes01, shoes02, shoes03, shoes04, shoes05, shoes06, homeIcon } from '../Assets';

export default function CCardCarousel({ value, index }) {
   const [bg, setBg] = useState('white')
   const {
      title,
      discount,
      image
   } = value;
   let imageIcon;
   const stringSubs = title.length > 48 ? `${title.substring(0, 48)}...` : title;
   const originalPrice = Object.values(value)[5];
   const priceValue = Object.values(value)[3];
   const location = Object.values(value)[6];
   const locationSubs = location.length > 20 ? `${location.substring(0, 20)}...` : location;
   const imageSlice = image.slice(0, -4).toUpperCase()

   const rupiah = (number) => {
      return new Intl.NumberFormat("id-ID", {
         style: "currency",
         currency: "IDR"
      }).format(number);
   }

   switch (imageSlice) {
      case 'SHOES-1':
         imageIcon = shoes01
         break;
      case 'SHOES-2':
         imageIcon = shoes02
         break;
      case 'SHOES-3':
         imageIcon = shoes03
         break;
      case 'SHOES-4':
         imageIcon = shoes04
         break;
      case 'SHOES-5':
         imageIcon = shoes05
         break;
      case 'SHOES-6':
         imageIcon = shoes06
         break;
      default:
         imageIcon = shoes01
         break;
   }

   return (
      <Box key={index} w={'240px'} bg={bg} rounded='2xl' boxShadow={'lg'} overflow={'hidden'} marginBottom={5} onMouseOver={() => setBg('#EAEAEA')} onMouseOut={() => setBg('white')}>
         <Image src={imageIcon} alt='shoes' h={'220px'} w={'100%'} objectFit={'cover'} />
         <Box padding={'12px'}>
            <Text marginBottom={'4px'}>{stringSubs}</Text>
            <Text marginBottom={'6px'} fontSize={'20px'} fontWeight={'bold'}>{rupiah(priceValue)}</Text>
            <Flex alignItems={'center'} marginBottom={'12px'}>
               <Box background={'pink'} rounded='md' padding={'6px'} marginRight={'8px'}>
                  <Text>{discount.includes('%') ? discount : `${discount}%`}</Text>
               </Box>
               <Text textDecorationLine={'line-through'}>{rupiah(originalPrice)}</Text>
            </Flex>
            <Flex alignItems={'center'}>
               <Image src={homeIcon} alt='home' h={4} w={4} marginRight={2} />
               <Text>{locationSubs}</Text>
            </Flex>
         </Box>
      </Box>
   )
}
