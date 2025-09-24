import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let {title,description, imageURL, newsURL} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img style={{height: "200px"}} src={imageURL?imageURL:"https://w7.pngwing.com/pngs/898/590/png-transparent-newspaper-mobile-app-mailonline-android-news-files-free-miscellaneous-text-logo.png"} className="card-img-top" alt="Image is not loading"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsURL} target ="_blank" className="btn btn-sm btn-primary">Read more..</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
