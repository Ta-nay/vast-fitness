
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { Pagination,Box,Stack,Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'
import { exerciseOptions,fetchData } from '../utils/fetchData'
import 'react-horizontal-scrolling-menu/dist/styles.css'
const Exercises = ({exercises,setExercises,bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };


  return (
    <Box id='exercises' mt='50px' sx={{mt: {lg:'110px'}}} p={'10px'}>
      <Typography variant='h3' mb={'46px'}>Showing results</Typography>

      <Stack direction={'row'} sx={{gap:{lg:'110px' , xs:'50px'}}} flexWrap={'wrap'} justifyContent={'center'}>
      {currentExercises.map((exercise,index) =>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises