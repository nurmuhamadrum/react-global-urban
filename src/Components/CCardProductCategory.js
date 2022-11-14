import React from 'react';
// ASSETS
import {
  watchCategoryIcon,
  shoesCategoryIcon,
  waistcoatCategoryIcon,
  pantiesCategoryIcon,
  skirtCategoryIcon
} from '../Assets';
// CHAKRA UI
import {
  Text,
  Box,
  Image
} from '@chakra-ui/react';
export default function CCardProductCategory({ dataCategory }) {
  const { title } = dataCategory;
  let imageIcon;

  switch (title.toUpperCase()) {
    case 'SEPATU':
      imageIcon = shoesCategoryIcon
      break;
    case 'CELANA DALAM':
      imageIcon = pantiesCategoryIcon
      break;
    case 'ROK':
      imageIcon = skirtCategoryIcon
      break;
    case 'JAM':
      imageIcon = watchCategoryIcon
      break;
    case 'JAKET':
      imageIcon = waistcoatCategoryIcon
      break;
    default:
      imageIcon = shoesCategoryIcon
      break;
  }

  return (
    <Box display={'flex'} alignItems={'center'} borderWidth={'1px'} overflow={'hidden'} borderRadius={'24px'} padding={'2px 18px 2px 6px'} marginRight={'12px'}>
      <Image src={imageIcon} alt='watch-icon' h={10} w={10} />
      <Text> {title}</Text>
    </Box>
  )
}
