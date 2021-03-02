import React, { useEffect, useState } from 'react';
import { ITodo } from '../../interfaces';
import TodoBar from '../../components/TodoBar';
import { Grid } from '@material-ui/core';
import TodoInput from '../../components/TodoInput';
import TodoItem from '../../components/TodoItem';

const Todos: React.FC = () => {
    const [todos, setTodos] = useState<Array<ITodo>>([]);

    useEffect(() => {
        const storage: Array<ITodo> = JSON.parse(localStorage.getItem('todos') || '[]');
        setTodos(storage);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title: string) => {
        const newTodo = {
            title,
            id: Date.now(),
            completed: false,
        };
        setTodos(prevState => [newTodo, ...prevState]);
    };

    const completeTodo = (id: number) => {
        setTodos(prev => prev.map(item => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        }));
    };

    const removeTodo = (id: number) => {
        setTodos(prev => prev.filter(item => item.id !== id));
    };

    return (
        <>
            <TodoBar/>
            <Grid container justify="center" direction="row">
                <TodoInput addTodo={addTodo}/>
                {
                    todos.map(item =>
                        <TodoItem
                            key={item.id}
                            todo={item}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo}
                        />)
                }
            </Grid>

        </>
    );
};

export default Todos;