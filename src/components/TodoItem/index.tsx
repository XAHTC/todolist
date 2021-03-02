import React from 'react';
import { Checkbox, FormControlLabel, Grid, Paper, Typography } from '@material-ui/core';

import { useStyles } from '../../theme';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { ITodo } from '../../interfaces';


interface ITodoItem {
    todo: ITodo,
    completeTodo: (id: number) => void,
    removeTodo: (id: number) => void,
}

const TodoItem: React.FC<ITodoItem> = ({ todo, completeTodo, removeTodo }) => {
    const classes = useStyles();

    const handleCompleteClick = () => {
        completeTodo(todo.id);
    };

    const handleRemoveClick = () => {
        if (window.confirm("Are you sure want to delete ToDo?")) {
            removeTodo(todo.id);
        }
    };

    return (
        <Grid item xs={9}>
            <Paper className={classes.paper}>
                <FormControlLabel
                    className={classes.formControlLabel}
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                            onClick={handleCompleteClick}
                        />
                    }
                    label={<Typography
                        className={todo.completed ? classes.formControlLabelTypoCompleted : classes.formControlLabelTypo}
                    >
                        {todo.title}
                    </Typography>}
                />
                <DeleteForeverIcon
                    className={classes.deleteIcon}
                    onClick={handleRemoveClick}
                />
            </Paper>
        </Grid>
    );
};

export default TodoItem;