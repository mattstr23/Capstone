import React from 'react';
import {useSelector} from 'react-redux';
import Coin from './Coin';
import "../Styling/Markets.css"
import { useState } from 'react';
import Pagination from './Pagination';

export default function Markets() {
    const markets = useSelector((state) => state.marketData);
    
     // For Pagination
     const [currentPage, setCurrentPage] = useState(1)
     const [postPerPage, setPostPerPage] = useState(50)
     const indexOfLastPost = currentPage * postPerPage;
     const indexOfFirstPost = indexOfLastPost - postPerPage;        
     
     const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const [searchValue, SetSearchValue] = useState('')

    const searchHandle = (e) => {SetSearchValue(e.target.value)}
    const cryptoFilter = markets?.data?.filter(coin => 
        coin.name.toLowerCase().includes(searchValue.toLowerCase()))

    const currentPosts = cryptoFilter?.slice(indexOfFirstPost, indexOfLastPost)
        
    return (
        <div className="marketsPage">
            <div className="infoArea">
                <h1 className="infoTitle">MARKETS</h1>
                <h4 className="greeting">Browse the markets below, click the name of the Crypto to see more on it</h4>
            </div>
            <div className="searchCont">
                <input className="searchBar"onChange={searchHandle} type="search" placeholder="Lookup Crypto"/>
            </div>
            <div className="coinCont">
                { currentPosts?.map((coin) => <Coin key={coin.id}coin={coin}/>)}
            </div>
            <Pagination postPerPage={postPerPage} totalPosts={markets?.data?.length} paginate={paginate}/>
        </div>
    )
}
