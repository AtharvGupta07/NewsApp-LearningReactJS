import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h3>News-Monkey Top Headlines:</h3>
        <div className="sub-container grid grid-cols-3 gap-4">
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
      </div>

    )
  }
}

export default News
