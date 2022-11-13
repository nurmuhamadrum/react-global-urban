import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector, useDispatch } from 'react-redux';
// COMPONENTS
import CHeader from '../../Components/CHeader';
import CCardProductCategory from '../../Components/CCardProductCategory';
import CCardCarousel from '../../Components/CCardCarousel';
// CHAKRA UI COMPONENTS
import {
   Box,
   Flex,
   Button
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
// FUNCTION
import { setDataProduct } from '../../Config/Actions';

export default function HomeScreen() {
   const [sliderRef, setSliderRef] = useState(null)
   const dataProduct = useSelector((state) => state.product.data)
   const dispatch = useDispatch()

   useEffect(() => {
      // fetch data api here
   }, [dataProduct])

   const carouselSetting = {
      speed: 600,
      lazyLoad: true,
      autoplaySpeed: 3000,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2 } }]
   };

   return (
      <React.Fragment>
         <CHeader />
         {/** Content Home Screen */}
         <Box paddingTop={'120px'}>
            <Flex flexDirection={'column'} boxShadow='lg' margin={'0px 120px 20px 120px'} rounded='md' p='6'>
               {/** Category List Section */}
               <Box display={'flex'} marginBottom={'24px'}>
                  {[1, 2, 3, 4].map(() => {
                     return <CCardProductCategory />
                  })}
               </Box>
               {/** Product Carousel Section */}
               <Box gap={6} display={'flex'} alignItems={'center'} marginBottom={'24px'}>
                  <Button onClick={sliderRef?.slickPrev}>
                     <ChevronLeftIcon />
                  </Button>
                  <Box width={'88%'}>
                     <Slider ref={setSliderRef} {...carouselSetting}>
                        {[1, 2, 3, 4, 5].map((value, key) => {
                           return (
                              <Link to={`detail-product?id=${key}`} onClick={() => dispatch(setDataProduct([]))}> {/** Dispatch Data to Redux Store */}
                                 <CCardCarousel value={value} index={key} key={key} />
                              </Link>
                           )
                        })}
                     </Slider>
                  </Box>
                  <Button onClick={sliderRef?.slickNext}>
                     <ChevronRightIcon />
                  </Button>
               </Box>
            </Flex>
         </Box>
      </React.Fragment>
   )
}
