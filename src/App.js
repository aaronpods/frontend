import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      eaze_posts: []
    }
  }

componentDidMount() {
    let dataURL = "http://eaze-site-giphy-rest.dev/wp-json/eaze-rest-api/v1/gifs"; 
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          eaze_posts: res
        })
      })
  }

render() {
      let eaze_posts = this.state.eaze_posts.map((post, index) => {
      return <div className='frame' key={index}>
      
        <img style={{width: 100+'%'}} src={post.post_thumbnail_image}/>
        <h1>{post.post_title} </h1>
        <div> 
          <img src={post.all_custom_fields.Post_GIF_1}/>
          <img src={post.all_custom_fields.Post_GIF_2}/>
          <img src={post.all_custom_fields.Post_GIF_3}/>
        </div>
        
        <div dangerouslySetInnerHTML={{__html:post.post_content}}></div>
        <hr/>

      </div>
    });

return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Aaron Podbelski's Eaze Project </h1>
        </header>
        <p className="App-intro">
          {eaze_posts}
        </p>
      </div>
    )
  }
}

export default App;
