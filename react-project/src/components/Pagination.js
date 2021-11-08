import React from 'react'
import '../Styling/Pagination.css'

export default function Pagination(props) {
    const postsPerPage = props.postPerPage;
    const totalPosts = props.totalPosts
    const paginate = props.paginate
    
    console.log(totalPosts)
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
        
    }
    
    
    return (
        <div className="paginationDiv">
             
                {pageNumbers.map(number=> (<p key={number} className="page-item" 
                 onClick={()=> paginate(number)}> {number}</p> ))}
            
        </div>
    )
}
