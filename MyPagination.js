import React from 'react'
import { Pagination } from 'react-bootstrap';

const MyPagination = ({ totalPosts, PostPerPage, handlePagination }) => {
    let pageNumbers = [];
    let DOTS = '...';

    for (let i = 1; i <= Math.ceil(totalPosts / PostPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <>
            <nav>
                <ul className="paginationList">
                    {pageNumbers.map((numbers) => (
                        <li key={numbers} className="page-item">
                            <a onClick={() => handlePagination(numbers)} className='page-link'>{numbers}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* <div className="paginationList">
                {pageNumbers.map((numbers) => (
                    <Pagination.Item >{numbers}</Pagination.Item>
                ))}
            </div> */}
        </>
    )
}

export default MyPagination