import React from 'react';
import { connect } from 'react-redux'; //connecting to Redux part 1
import { addTodo } from '../../actions';

//        event.target.userInput.value = '';
//equivalent to function AddTodo () = {}
const AddTodo = (props) => (
    <form onSubmit={(event) => {
        event.preventDefault();

        let input = event.target.userInput.value;
        props.dispatch(addTodo(input));

    }}>
        <input type='text' name='userInput' />
        <button>Submit</button>
    </form>
)

export default connect()(AddTodo); //connecting to Redux part 2
