import { PropTypes } from 'prop-types'

const Todo = ({todo, removeTodo, completeTodo}) => {
    return (
        <div>
            <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
                <div className="content">
                    <p>
                        {todo.text}
                    </p>
                    <p className="category">
                        ({todo.category})
                    </p>
                </div>
                <div>
                    <button className='complete' onClick={() => completeTodo(todo.id)}>
                        Completar
                    </button>
                    <button className='remove' onClick={() => removeTodo(todo.id)}>
                        x
                    </button>
                </div>
            </div>
        </div>
    )
}

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        category: PropTypes.string,
        isCompleted: PropTypes.bool
    }).isRequired,

    removeTodo: PropTypes.func.isRequired,

    completeTodo: PropTypes.func.isRequired,
};

export default Todo
