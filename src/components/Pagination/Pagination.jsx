import './Pagination.css'

const Pagination = ({pages, currentPage, setCurrentPage, itemsPerPage, handleItemsPerPage, handlePrevPage, handleNextPage}) => {
  return (
    <>
        <div className='pagination'>
            <p className='my-10'>Current page: {currentPage}</p>
            <button onClick={handlePrevPage} className='hover:bg-orange-400'>Prev</button>
            {
                pages.map(page => <button
                    className={currentPage === page ? 'selected' : undefined}
                    onClick={() => setCurrentPage(page)}
                    key={page}
                >{page}</button>)
            }
            <button onClick={handleNextPage} className='hover:bg-orange-400'>Next</button>
            <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="10">10</option>
            </select>
        </div>
    </>
  )
}

export default Pagination