/* eslint-disable react/prop-types */
import React from 'react'
import { Stack,Typography } from '@mui/material';
const Detail = ({exerciseDetail}) => {
    const {  gifUrl, name, target } = exerciseDetail;
    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
          <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
          <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
            <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
              {name}
            </Typography>
            <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
              Exercises keep you strong.{' '}
              <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
              of the best <br /> exercises to target your {target}. It will help you improve your{' '}
              <br /> mood and gain energy.
            </Typography>
          </Stack>
        </Stack>
      );
}

export default Detail