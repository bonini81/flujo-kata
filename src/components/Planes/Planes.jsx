import * as React from 'react';
import  {Box, Grid} from '@mui/material';


export default function Planes() {

    return (

        <section>
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
    <p>Hello World</p>
        </Grid>
        <Grid item xs={4}>
        <p>Hello World 1</p>
        </Grid>
        <Grid item xs={4}>
        <p>Hello World</p>
        </Grid>
        <Grid item xs={8}>
        <p>Hello World</p>
        </Grid>
      </Grid>
    </Box>
</section>

    );

}