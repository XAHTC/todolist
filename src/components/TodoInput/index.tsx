import React, { useRef } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useStyles } from '../../theme';

interface ITodoInput {
    addTodo: (title: string) => void,
}

const TodoInput: React.FC<ITodoInput> = ({ addTodo }) => {
    const classes = useStyles();
    const inputEl = useRef<HTMLInputElement>(null);

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            addTodo(inputEl.current!.value);
            inputEl.current!.value = '';
        }
    };

    return (
        <Grid item xs={9}>
            <TextField
                InputProps={{ style: { fontSize: 30 } }}
                fullWidth={true}
                className={classes.input}
                label="Add new ToDo"
                inputRef={inputEl}
                onKeyPress={handleKeyPress}
            />
        </Grid>
    );
};

export default TodoInput;