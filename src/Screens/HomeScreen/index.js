import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch } from 'react-redux';
// COMPONENTS
import CHeader from '../../Components/CHeader';
import CCardProductCategory from '../../Components/CCardProductCategory';
import CCardCarousel from '../../Components/CCardCarousel';
// CHAKRA UI COMPONENTS
import {
   Box,
   Flex,
   Button,
   Skeleton
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
// FUNCTION
import { setDataProduct } from '../../Config/Actions';
import { getCategoryList, getProductList } from '../../Functions';

export default function HomeScreen() {
   const [sliderRef, setSliderRef] = useState(null)
   const [category, setCategory] = useState([])
   const [product, setProductList] = useState([])
   const [loading, setLoading] = useState(false);
   const dispatch = useDispatch();
   const arrLoading = [1, 2, 3, 4]

   useEffect(() => {
      handlerGetCategory()
      handlerGetProduct()
   }, [])

   const handlerGetCategory = async () => {
      setLoading(true)
      const result = await getCategoryList()

      if (result) {
         setCategory(result)
         setLoading(false)
      } else {
         setLoading(false)
         // handle error get data category
      }
   }

   const handlerGetProduct = async () => {
      setLoading(true)
      const result = await getProductList()

      if (result) {
         setProductList(result)
         dispatch(setDataProduct(result))
         setLoading(false)
      } else {
         setLoading(false)
         // handle error get data product
      }
   }

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
               {loading ? (
                  <Flex marginBottom={'24px'}>
                     {arrLoading.map(() => {
                        return <Skeleton height='50px' width={'200px'} marginRight={'12px'} borderRadius={'24px'} />
                     })}
                  </Flex>
               ) : (
                  <Box display={'flex'} marginBottom={'24px'}>
                     {category.map((value, key) => {
                        return <CCardProductCategory dataCategory={value} key={key} />
                     })}
                  </Box>
               )}
               {/** Product Carousel Section */}
               <Box gap={6} display={'flex'} alignItems={'center'} marginBottom={'24px'}>
                  <Button onClick={sliderRef?.slickPrev}>
                     <ChevronLeftIcon />
                  </Button>
                  <Box width={'88%'}>
                     {loading ? (
                        <Flex>
                           {arrLoading.map(() => {
                              return <Skeleton height='400px' width={'250px'} marginRight={'12px'} borderRadius={'24px'} />
                           })}
                        </Flex>
                     ) : (
                        <Slider ref={setSliderRef} {...carouselSetting}>
                           {product.map((value, key) => {
                              return (
                                 <Link to={`detail-product?id=${key}`}>
                                    <CCardCarousel value={value} index={key} key={key} />
                                 </Link>
                              )
                           })}
                        </Slider>
                     )}
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
