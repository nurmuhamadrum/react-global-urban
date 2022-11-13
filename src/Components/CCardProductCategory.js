import React from 'react';
// ASSETS
import { watchCategoryIcon } from '../Assets';
// CHAKRA UI
import {
    Text,
    Box,
    Image
 } from '@chakra-ui/react';
export default function CCardProductCategory() {
  return (
    <Box display={'flex'} alignItems={'center'} borderWidth={'1px'} overflow={'hidden'} borderRadius={'24px'} padding={'2px 18px 2px 6px'} marginRight={'12px'}>
        <Image src={watchCategoryIcon} alt='watch-icon' h={10} w={10} />
        <Text> Sepatu</Text>
    </Box>
  )
}
