const ADD_TODO = 'ADD_TODO';
export const addTodo = (text) => ({ //export = to be dispatched by component
    type: ADD_TODO,
    text,
    id: Math.random()
})

const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (id) => ({ //export = to be dispatched by component
    type: DELETE_TODO,
    id
})
