import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { userRequest } from '../../requestMethods';

const RevenueComponent = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getIncome = async () => {
      try {
        const { data } = await userRequest.get('/orders/stats');

        const list = data.sort((a, b) => {
          return a._id - b._id;
        });
        setIncome(list);
        setPerc((list[1].total * 100) / list[0].total - 100);
      } catch (err) {
        setMessage(err.message);
      }
    };
    getIncome();
  }, []);

  return (
    <>
      {income && perc && (
        <Paper elevation={3} sx={{ padding: '2rem', width: '30%' }}>
          <Typography variant='h5'>Revenue</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography component='p' variant='p' sx={{ fontSize: 30, my: 2 }}>
              ${income[1].total}
            </Typography>
            <Typography
              component='p'
              variant='p'
              sx={{ fontSize: 15, my: 2, alignSelf: 'center' }}
            >
              {Math.floor(perc)}%
              {perc < 0 ? (
                <ArrowDownwardIcon sx={{ alignSelf: 'center', color: 'red' }} />
              ) : (
                <ArrowUpwardIcon sx={{ alignSelf: 'center', color: 'green' }} />
              )}
            </Typography>
          </Box>
          <Typography component='p' variant='p' className='text-light'>
            Compared to Last Month
          </Typography>
        </Paper>
      )}
    </>
  );
};

export default RevenueComponent;
