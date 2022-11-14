import React, { useMemo, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
// COMPONENTS
import CHeader from '../../Components/CHeader';
// CHAKRA UI COMPONENTS
import {
   Text,
   Box,
   Image,
   Divider,
   Flex,
   Tabs,
   TabList,
   Tab,
   TabPanels,
   TabPanel,
   Button,
   HStack,
   Input,
   useNumberInput
} from '@chakra-ui/react';
import { shoes01, shoes02, shoes03, shoes04, shoes05, shoes06 } from '../../Assets'

function useQuery() {
   const { search } = useLocation();
   return useMemo(() => new URLSearchParams(search), [search]);
}

export default function DetailProduct() {
   const dataProduct = useSelector((state) => state.product.data);
   const query = useQuery();
   const id = Number(query.get('id'));

   const dataDetailFilter = dataProduct.filter((value) => {
      if (value.id === id) return value;
   });

   const dataFilter = dataDetailFilter && dataDetailFilter[0];
   const { category, color, condition, discount, image, material, stock, title, weight } = dataFilter;
   const originalPrice = Object.values(dataFilter)[5];
   const priceValue = Object.values(dataFilter)[3];
   const [totalPrice, setTotalPrice] = useState(priceValue);

   const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
         step: 1,
         defaultValue: 1,
         min: 1,
         max: Number(stock),
         onChange: (number) => countPrice(number)
      });

   const countPrice = (number) => {
      const sum = priceValue * number;
      setTotalPrice(sum);
   }

   const rupiah = (number) => {
      return new Intl.NumberFormat("id-ID", {
         style: "currency",
         currency: "IDR"
      }).format(number);
   }

   const inc = getIncrementButtonProps();
   const dec = getDecrementButtonProps();
   const input = getInputProps();
   const imageSlice = image.slice(0, -4).toUpperCase();
   let imageIcon;

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
      <React.Fragment>
         <CHeader />
         {/** Content Product Detail */}
         <Flex padding={'134px 120px 34px 120px'} justifyContent={'space-between'}>
            {/** Image Product Section */}
            <Image src={imageIcon} alt='shoes' h={'400px'} w={'300px'} objectFit={'cover'} rounded={'2xl'} />
            <Box flex={2} marginLeft={'36px'}>
               {/** Product Price Section */}
               <Text fontSize={'28px'} fontWeight={'bold'} lineHeight={'32px'}>{title}</Text>
               <Text fontSize={'32px'} fontWeight={'bold'} marginTop={'18px'}>{rupiah(priceValue)}</Text>
               <Flex alignItems={'center'} marginBottom={'24px'} marginTop={'6px'}>
                  <Box background={'pink'} rounded='md' padding={'6px'} marginRight={'8px'}>
                     <Text>{discount.includes('%') ? discount : `${discount}%`}</Text>
                  </Box>
                  <Text textDecorationLine={'line-through'}>{rupiah(originalPrice)}</Text>
               </Flex>
               <Divider borderWidth={1.2} />
               {/** Tab & Product Detail Section */}
               <Tabs>
                  <TabList>
                     <Tab>Detail</Tab>
                     <Tab>Spesifikasi</Tab>
                  </TabList>
                  {/** Tab Panel Section */}
                  <TabPanels>
                     <TabPanel>
                        <Flex>
                           <Text>Kondisi:</Text>
                           <Text fontWeight={'bold'} marginLeft={'4px'}>{condition}</Text>
                        </Flex>
                        <Flex>
                           <Text>Berat Satuan:</Text>
                           <Text fontWeight={'bold'} marginLeft={'4px'}>{weight}</Text>
                        </Flex>
                        <Flex>
                           <Text>Kategori:</Text>
                           <Text fontWeight={'bold'} marginLeft={'4px'}>{category}</Text>
                        </Flex>
                     </TabPanel>
                     <TabPanel>
                        <Text fontWeight={'bold'}>Info Product</Text>
                        <Flex>
                           <Text>Bahan:</Text>
                           <Text marginLeft={'4px'}>{material}</Text>
                        </Flex>
                        <Flex>
                           <Text>Warna:</Text>
                           <Text marginLeft={'4px'}>{color}</Text>
                        </Flex>
                     </TabPanel>
                  </TabPanels>

               </Tabs>
            </Box>
            {/** Cart Section */}
            <Box marginLeft={'24px'}>
               <Box boxShadow='lg' p='6' rounded='md' bg='white'>
                  <Text fontWeight={'bold'} marginBottom={'12px'}>Atur Jumlah Yang Akan Dibeli</Text>
                  <Flex>
                     <HStack maxW='220px'>
                        <Button {...inc}>+</Button>
                        <Input width={'45px'} {...input} />
                        <Button {...dec}>-</Button>
                     </HStack>
                     <Flex marginLeft={'18px'}>
                        <Text>Stok Total:</Text>
                        <Text fontWeight={'bold'} marginLeft={'4px'} color={'orange'}>{`Sisa ${stock}`}</Text>
                     </Flex>
                  </Flex>
                  <Flex justifyContent={'flex-end'} marginTop={'8px'}>
                     <Text>{rupiah(priceValue)}</Text>
                  </Flex>
                  <Flex justifyContent={'space-between'} marginTop={'8px'} marginBottom={'24px'}>
                     <Text>Subtotal</Text>
                     <Text fontWeight={'bold'}>{rupiah(totalPrice)}</Text>
                  </Flex>
                  <Button width={'100%'} colorScheme={'green'}>Beli</Button>
               </Box>
            </Box>
         </Flex>
      </React.Fragment>
   )
}
