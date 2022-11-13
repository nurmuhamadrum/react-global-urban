import React from 'react';
// CHAKRA UI
import {
   Text,
   Box,
   InputGroup,
   Input,
   InputRightAddon,
   Image,
   Center,
   Divider,
   Flex
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
// ASSETS
import { trolyIcon, userIcon } from '../Assets';

export default function Header() {
   return (
      <Flex width={'100%'} position={'fixed'} boxShadow='lg' padding={'20px 120px 20px 120px'} bg='white' alignItems={'center'} justifyContent={'space-between'}>
         <InputGroup width={'70%'} marginRight={'24px'}>
            <Input type='text' placeholder='Search product...' />
            <InputRightAddon children={<Search2Icon w={4} h={4} />} />
         </InputGroup>
         <Box display={'flex'} alignItems={'center'}>
            <Image src={trolyIcon} alt='trolley-icon' h={6} w={6} />
            <Center height='40px' margin={'0px 24px 0px 24px'}>
               <Divider orientation='vertical' />
            </Center>
            <Image src={userIcon} alt='trolley-icon' h={6} w={6} marginRight={'12px'} />
            <Text>Hi Customer!</Text>
         </Box>
      </Flex>
   )
}
