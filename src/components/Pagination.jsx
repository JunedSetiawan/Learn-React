import ReactPaginate from 'react-paginate';

function Pagination(props) {
  const { todos, itemsPerPage, setCurrentPage } = props;

  const handlePageChange = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <ReactPaginate
      previousLabel="<<"
      nextLabel=">>"
      pageCount={Math.ceil(todos.length / itemsPerPage)}
      onPageChange={handlePageChange}
      containerClassName={'pagination flex gap-2 items-center'}
      previousLinkClassName={'btn px-3 btn-accent btn-outline'}
      nextLinkClassName={'btn px-3 btn-accent btn-outline'}
      disabledClassName={'pagination__link--disabled'}
      activeClassName={'btn-primary px-3 py-1'}
    />
  );
}

export default Pagination;
