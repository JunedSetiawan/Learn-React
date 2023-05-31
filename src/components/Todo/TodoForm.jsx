function TodoForm({
    // eslint-disable-next-line react/prop-types
    editTodo, setEditTodo, handleUpdate, handleSubmit, currentTodo, setCurrentTodo, handleInputChange
}) {
    return (
        <form onSubmit={editTodo ? handleUpdate : handleSubmit} className='flex space-x-3'>
            <input
                type='text'
                id='todo'
                name='todo'
                // eslint-disable-next-line react/prop-types
                value={currentTodo.text || ''}
                onChange={(e) => handleInputChange(e)}
                placeholder='Tulis Tugas..'
                required
                className='input input-bordered input-primary w-full max-w-xs' />
            <button type='submit' className={editTodo ? 'btn btn-warning' : 'btn btn-primary'}>
                {editTodo ? 'Update' : 'Submit'}
            </button>
            {editTodo && <button onClick={() => {
                setEditTodo(false);
                setCurrentTodo({});
            }}>Cancel</button>}
        </form>
    );
}

export default TodoForm;
