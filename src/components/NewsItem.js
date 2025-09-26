import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let {title,description, imageURL, newsURL} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{height: "500px" , width: "18rem"}}>
        <img style={{height: "200px"}} src={imageURL?imageURL:"https://w7.pngwing.com/pngs/898/590/png-transparent-newspaper-mobile-app-mailonline-android-news-files-free-miscellaneous-text-logo.png"} className="card-img-top" alt="Invalid Image"/>
        <div className="card-body flex flex-col">
            <h2 className="card-title font-bold text-xl my-auto">{title != null ?(title.length < 50? title : title.slice(0,50)+"..."):"This News doesn't have any Heading"}</h2>
            <p className="card-text my-auto  px-2">{description != null?(description.length < 150? description: description.slice(0,150)+"..."):"This news doesn't have any description."}</p>
            <div className="buttonRead mx-2">
              <a href={newsURL} target ="_blank" className="btn btn-sm btn-dark my-auto mr-auto">Read more..</a>
            </div>
            
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
