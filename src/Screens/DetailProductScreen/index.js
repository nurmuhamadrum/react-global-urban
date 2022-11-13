import React, { useMemo } from 'react';
import { useLocation } from "react-router-dom";
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
import { shoesImage } from '../../Assets'

function useQuery() {
   const { search } = useLocation();
   return useMemo(() => new URLSearchParams(search), [search]);
}

export default function DetailProduct() {
   let query = useQuery();
   let id = Number(query.get('id'));

   const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
         step: 1,
         defaultValue: 1,
         min: 1,
         max: 9,
      })

   const inc = getIncrementButtonProps()
   const dec = getDecrementButtonProps()
   const input = getInputProps()

   return (
      <React.Fragment>
         <CHeader />
         {/** Content Product Detail */}
         <Flex padding={'134px 120px 34px 120px'} justifyContent={'space-between'}>
            {/** Image Product Section */}
            <Image src={shoesImage} alt='shoes' h={'400px'} w={'300px'} objectFit={'cover'} rounded={'2xl'} />
            <Box flex={2} marginLeft={'36px'}>
               {/** Product Price Section */}
               <Text fontSize={'28px'} fontWeight={'bold'} lineHeight={'32px'}>Sepatu pria sepatu murah sneakers sepatu kets nike berwarna hijau</Text>
               <Text fontSize={'32px'} fontWeight={'bold'} marginTop={'18px'}>Rp. 0</Text>
               <Flex alignItems={'center'} marginBottom={'24px'} marginTop={'6px'}>
                  <Box background={'pink'} rounded='md' padding={'6px'} marginRight={'8px'}>
                     <Text>100%</Text>
                  </Box>
                  <Text>Rp. 500.000</Text>
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
                           <Text fontWeight={'bold'} marginLeft={'4px'}>Baru</Text>
                        </Flex>
                        <Flex>
                           <Text>Berat Satuan:</Text>
                           <Text fontWeight={'bold'} marginLeft={'4px'}>200 Gram</Text>
                        </Flex>
                        <Flex>
                           <Text>Kategori:</Text>
                           <Text fontWeight={'bold'} marginLeft={'4px'}>Sepatu Pria</Text>
                        </Flex>
                     </TabPanel>
                     <TabPanel>
                        <Text fontWeight={'bold'}>Info Product</Text>
                        <Flex>
                           <Text>Bahan:</Text>
                           <Text marginLeft={'4px'}>100% Rubber</Text>
                        </Flex>
                        <Flex>
                           <Text>Warna:</Text>
                           <Text marginLeft={'4px'}>Hijau</Text>
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
                        <Text fontWeight={'bold'} marginLeft={'4px'} color={'orange'}>Sisa 1</Text>
                     </Flex>
                  </Flex>
                  <Flex justifyContent={'flex-end'} marginTop={'8px'}>
                     <Text>Rp. 69.000</Text>
                  </Flex>
                  <Flex justifyContent={'space-between'} marginTop={'8px'} marginBottom={'24px'}>
                     <Text>Subtotal</Text>
                     <Text fontWeight={'bold'}>Rp. 0</Text>
                  </Flex>
                  <Button width={'100%'} colorScheme={'green'}>Beli</Button>
               </Box>
            </Box>
         </Flex>
      </React.Fragment>
   )
}
