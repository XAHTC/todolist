import React from 'react';
import { AppBar, Box, Container, Link, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../theme';

const TodoBar: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <AppBar position="static">
            <Container fixed>
                <Toolbar>
                    <Typography className={classes.title} variant='h6'>
                        TodoList
                    </Typography>
                    <Box>
                        <Link
                            className={classes.menuLink}
                            color='inherit'
                            onClick={() => history.push('/')}
                        >
                            ToDo's
                        </Link>
                        <Link
                            className={classes.menuLink}
                            color='inherit'
                            onClick={() => history.push('/about')}
                        >
                            About
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TodoBar;