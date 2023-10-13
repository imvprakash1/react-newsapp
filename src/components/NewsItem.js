import React from 'react'

const NewsItem=(props)=> {
    let {title,description,imageUrl,newsUrl,source}=props;
    return (
      <div className='my-3'>
      <div className="card">
      <div style={{display:'flex',position:'absolute',right:0,justifyCOntent:'flex-end'}}>
  <span className="badge rounded-pill bg-danger">{source}</span>
      </div>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  
    <h5 className="card-title">{title?title.slice(0,50):""}...</h5>
    <p className="card-text">{description?description.slice(0,100):""}...</p>
    <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read more!</a>
  </div>
</div>
      </div>
    )
}

export default NewsItem;