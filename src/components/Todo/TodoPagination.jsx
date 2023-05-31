import Pagination from "../Pagination"
function TodoPagination({ todos,currentPage,itemsPerPage,setCurrentPage }) {
    return (
    <>
        {todos.length !== 0 ? (
            <div className='max-w-lg text-center flex justify-center my-3'>
            <Pagination
               todos={todos}
               currentPage={currentPage}
               itemsPerPage={itemsPerPage}
               setCurrentPage={setCurrentPage}
            />
            </div>
            ) : ('')}
    </>
    )
}

export default TodoPagination;