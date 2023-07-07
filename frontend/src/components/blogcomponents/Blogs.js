import React, { useState, useEffect } from "react";
import axios from "axios"
import {getRequest} from "../../config/api"
import Loading from "../Loading"

const Blogs = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      loadData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(() => {
      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight
        ) {
            console.log("attempting read");
          loadMore();
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [data]);
  
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(getRequest(`/blog/?page=${page}`));
        setData([...response.data.results]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error loading data:', error);
        
      }
    };
  
    const loadMore = async () => {
      if (!loading) {
        try {
          setLoading(true);
          const nextPage = page + 1;
          const response = await axios.get(getRequest(`/blog/?page=${nextPage}`));
          setData(prevData => [...prevData, ...response.data.results]);
          setPage(nextPage);
          setLoading(false);
        } catch (error) {
            setLoading(false);
          console.error('Error loading more data:', error);
        }
      }
    };
    
    return (
      <div>
        { 
        data.map((item) => {
            return (
                <><div className={"flex flex-col justify-start"} key={item.id}></div><div dangerouslySetInnerHTML={{__html:item.content}}/>{console.log("item:",item)}</>
            )
        }
                
            )}
        {loading && <div><Loading/></div>}
      </div>
    );
  };
export default Blogs;