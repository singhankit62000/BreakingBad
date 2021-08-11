import React, { useState, useEffect } from 'react'
import CharacterItem from './Character/CharacterItem'
import Spinner from '../ui/Spinner'
import ReactPaginate from 'react-paginate'

const CharacterGrid = ({ items, isLoading }) => {
    const [pageNumber, setPageNumber] = useState(0);

    const charPerPage = 10;
    const pagesVisited = pageNumber * charPerPage;

    const displayCharacters = items.slice(pagesVisited, pagesVisited + charPerPage)
    .map((item) => {
        return (
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        );
    });

    const pageCount = Math.ceil(items.length / charPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [pageNumber]);

    return isLoading ? (
    <Spinner />
    ) : (
    <section className="cards">
        {displayCharacters}
        <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        onPageChange={changePage}
        pageRangeDisplayed={2}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </section>
    )
}

export default CharacterGrid
