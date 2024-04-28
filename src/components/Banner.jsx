import React from 'react'
import { Box ,Stack, Typography, Button } from '@mui/material'
import BannerImg from '../assets/tushar.jpg'
const Banner = () => {
  return (
    <Box sx={{
        mt:{ lg:'212px', xs:'70px'},
        ml:{sm:'50px'}
    }} position={'relative'} p='20px'>
        <Typography color='#FF2625' fontWeight='600'  fontSize={'25px'}>
            VAST FITNESS CLUB
        </Typography>
        <Typography mb={'18px'} mt={'15px'} fontWeight={'700'} sx={{fontSize:{lg:'44px' , xs:'40px'}}}>
            Go big or Go Home!!
        </Typography>
        <Typography fontSize={'22px'} lineHeight={'35px'} mb={5}>
            "Ready to transform your body and life??"
        </Typography>
        <Button variant='contained' color='primary' href='#exercises' sx={{background:'#FF2625'}} padding='10px'>Explore Exercises</Button>
        <Typography position='sticky' fontSize='150px' fontWeight={600} color={'#FF2625'} sx={{opacity:0.2}}>
            VAST FITNESS
        </Typography>
        <img src={BannerImg} alt='Banner' className='hero-banner-img' style={{width:'600px',height:'720px',borderRadius:'0 25%', marginRight:'50px'}}/>
    </Box>
  )
}

export default Banner