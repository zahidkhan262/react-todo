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
            {<div className="paginationList">
                {pageNumbers.map((numbers) => (
                    <Pagination.Item >{numbers}</Pagination.Item>
                ))}
            </div>}
        </>
    )
}

export default MyPagination


// filter data by keys\

// filter by keys  and with entire value
    const search = (data) => {
        return data?.filter((items) => (
            dataKeys?.some((key) => items[key]?.toString().includes(query) || items[key]?.toString().toLowerCase().includes(query) || items[key]?.toString().toUpperCase().includes(query))
        ));
    }

    
    const expdate = '0421';
const expDateFormatter = expdate.replace(/\//g, "").substring(0, 2) + 
  (expdate.length > 2 ? '/' : '') + 
  expdate.replace(/\//g, "").substring(2, 4);
  
console.log(expDateFormatter)
