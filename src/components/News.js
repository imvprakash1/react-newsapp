import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

 const [articles,setArticles]=useState([])
 const [loading,setLoading]=useState(true)
 const [page,setPage]=useState(1)
 const [totalResults,setTotalResults]=useState(0)
//  document.title=`${this.capitalizeFirstLetter(props.category)} News`

  const capitalizeFirstLetter=(word)=>{
    
    return word.charAt(0).toUpperCase()+word.slice(1);
  }
  
  const updateNews=async()=>{
    props.setProgress(0);
    setLoading(true);
    let url=`https://newsapi.org/v2/top-headlines/?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    let data=await fetch(url);
    let parsedData=await data.json()

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
    }, [])
  
  // const handleNext=async ()=>{
  //   setPage(page+1);
  //   updateNews();
  // }
  // const handlePrev=async ()=>{
  //   setPage(page-1);
  //   updateNews();
  // }
  const fetchMoreData = async () => {
    setPage(page+1);
   let url=`https://newsapi.org/v2/top-headlines/?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page+1}`;
    let data=await fetch(url);
    let parsedData=await data.json()
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({articles:this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults,loading:false})
  };

    return (
      <>
        <h1 className="text-center">Top {`${capitalizeFirstLetter(props.category)} News`} Headlines for you!</h1>
        {/* {this.state.loading && <Spinner/>} */}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}>
        <div className="container">
        <div className="row">
        {!loading && articles.map((element)=>{
         return  <div className="col-md-4 my-3" key={element.url}>
          <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name}/>
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
}

News.defaultProps={
  country:'in',
  pageSize:5,
  category:'general'
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News;