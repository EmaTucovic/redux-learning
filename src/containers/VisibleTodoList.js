import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {
  addTodo, completeTodo, setVisibilityFilter,
  VisibilityFilters
} from '../actions';
// Container comp can 
// READ A STATE => define mapStateToProps(state) ... return obj with props
// DISPATCH AN ACTION => define mapDispatchToProps( dispatch() ) ... returns cb props that you want to inject into presentational component

//filters the todos according to the current visibility filter and renders a TodoList

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED' :
            return todos.filter( (item) => item.completed);
        case 'SHOW_ACTIVE': 
            return todos.filter( (item) => !item.completed);
        }
}

//To use connect(), you need to define a special function called mapStateToProps
// that tells how to transform the current Redux store state into the props you want to pass to a presentational component 
const mapStateToProps = state => {
    return {
        todos : getVisibleTodos(state.todos, state.visibilityFilter)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick : id => {
            dispatch(completeTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default  VisibleTodoList;