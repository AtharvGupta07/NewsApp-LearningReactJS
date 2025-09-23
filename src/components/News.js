import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Hamnet, Sinners and Christy: 12 films to look out for in the Oscars race",
      "description": "The top contenders for Hollywood’s awards season have emerged following the autumn film festivals.",
      "url": "https://www.bbc.co.uk/news/articles/cd9y7qx7gqno",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/e134/live/b8978850-93ce-11f0-b391-6936825093bd.jpg",
      "publishedAt": "2025-09-21T15:37:23.1357234Z",
      "content": "If you were to write the perfect recipe for a potential best picture Oscar nominee, the ingredients would broadly resemble Hamnet.\r\nAdapt a wildly popular novel (by Maggie O'Farrell), hire a recent O… [+436 chars]"
    },
    {
      "source": {
        "id": "entertainment-weekly",
        "name": "Entertainment Weekly"
      },
      "author": "https://www.facebook.com/entertainmentweekly",
      "title": "Amy Poehler blasts Oscars for snubbing comedies: 'It's some hot bulls---'",
      "description": "'SNL' alum Amy Poehler said comedies are overlooked at the Oscars and that the genre is harder to pull off than people think.",
      "url": "https://ew.com/amy-poehler-blasts-oscars-for-major-snub-11812186",
      "urlToImage": "https://ew.com/thmb/i7WJ78WQPVAF4U44CnUaLihNv_I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amy-poehler-091725-1b710503fdc64dc59a10bef54dd46af4.jpg",
      "publishedAt": "2025-09-21T15:22:19.6370936Z",
      "content": "Amy Poehler has some choice words for the Academy after seeing comedies get snubbed at the Oscars year after year.\r\n\"Its some hot bulls--- because comedy is not easy,\" she said on a recent episode of… [+1428 chars]"
    },
    {
      "source": {
        "id": "ars-technica",
        "name": "Ars Technica"
      },
      "author": "Jonathan M. Gitlin",
      "title": "Car dealers renew their opposition to EV mandates",
      "description": "An EV mandate would make gasoline cars too expensive, say the dealers.",
      "url": "https://arstechnica.com/cars/2024/10/car-dealers-renew-their-opposition-to-ev-mandates/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/10/car-dealer-sisyphus-760x380.jpg",
      "publishedAt": "2024-10-01T17:31:26+00:00",
      "content": "199\r\nA group of more than 5,000 car dealers have made public their worries about a lack of demand for electric vehicles. Earlier this year the group lobbied the White House to water down impending fe… [+1893 chars]"
    },
    {
      "source": {
        "id": "new-scientist",
        "name": "New Scientist"
      },
      "author": null,
      "title": "Ford patents car that can repossess itself and drive back to showroom",
      "description": "A new patent allows Ford to build cars that take action if the owner falls behind on payments by playing annoying sounds – or even driving themselves back to the seller",
      "url": "https://www.newscientist.com/article/2361657-ford-patents-car-that-can-repossess-itself-and-drive-back-to-showroom/",
      "urlToImage": "https://images.newscientist.com/wp-content/uploads/2023/02/28122734/SEI_146189854.jpg",
      "publishedAt": "2023-02-28T00:00:00Z",
      "content": "By Matthew Sparkes\r\nFord wants to build cars that repossess themselves, although the technology can’t be used on current models like the Ford Puma\r\nFord Motor Company\r\nFord has been granted a patent … [+2590 chars]"
    }
  ]

  constructor(){
    super();
    // console.log("Constructor");
    this.state = {
      articles: this.articles,
      loading : false ,

    }
    
  }

  render() {
    return (
      <div className='container my-3  '>
        <h3>News-Monkey Top Headlines:</h3>
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
        <div className="row ">
          {this.state.articles.map((element)=>{
             return <div className="col md-3" key={element.url}>
              <NewsItem  title={element.title.slice(0,40)} description={element.description.slice(0,100)} imageURL ={element.urlToImage} newsURL={element.url} />
            </div> 
          })}
          
        </div>
      </div>

    )
  }
}

export default News
