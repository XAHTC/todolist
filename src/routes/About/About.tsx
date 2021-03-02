import TodoBar from '../../components/TodoBar';
import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const About: React.FC = () => {
    return (
        <>
            <TodoBar/>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="row"
            >
                <Typography variant="h6" >
                    Simple ToDo list with using TypeScript!
                </Typography>
            </Grid>
        </>
    );
};

export default About;