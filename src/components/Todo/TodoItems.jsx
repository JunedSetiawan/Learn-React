function TodoItems({
    // eslint-disable-next-line react/prop-types
    todos, editTodo, currentTodo, handleEdit, handleDelete, handleChangeStatus,handleInputChange,itemsPerPage,offset
}) {
    return (
        <ol className='m-4 space-y-2 my-11'>
        {todos.length === 0 ? (
          <p className='text-lg font-bold text-gray-400'>Tidak ada tugas</p>
        ) : (
          todos
            .slice(offset, offset + itemsPerPage)
            .map((todo) => (
              <li key={todo.id} className='space-x-2 flex justify-start items-center'>
                {editTodo && currentTodo.id === todo.id ? (
                  <input
                    type='text'
                    value={currentTodo.text}
                    onChange={(e) => handleInputChange(e)}
                    disabled={true}
                    className='input input-bordered w-full max-w-lg'
                  />
                ) : (
                  <>
                    <input
                      type='checkbox'
                      checked={todo.isComplete}
                      onChange={() => handleChangeStatus(todo.id)}
                      className='checkbox checkbox-accent'
                    />
                    <span
                      style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}
                      className='text-lg font-medium pr-5 max-w-lg break-all'
                    >
                      {todo.text}
                    </span>
                    <button
                      className='btn btn-outline btn-warning'
                      onClick={() => handleEdit(todos.indexOf(todo))}
                    >
                      Update
                    </button>
                    <button
                      className='btn btn-outline btn-error'
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))
        )}
      </ol>
    )
}

export default TodoItems;