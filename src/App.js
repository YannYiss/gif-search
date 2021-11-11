import React from 'react';
import './App.css';

import ImageCard from './Components/ImageCard';
import SearchBar from './Components/SearchBar';
import axios from 'axios';

class App extends React.Component {
  state= {
    results: []
  }

  search = (searchWord) => {
    const apiKey = 'H5hyO8MRIWexqWxsLISQTMICm5htgNpg';
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchWord}`)
    .then((resultsApi) => {
      if(resultsApi.data.meta.status === 200) {
        this.setState({results: resultsApi.data.data})
      }
    })
    .catch((e) => console.log(e))
  }
  render() {
    return (
      <div className="App">
        <SearchBar searchTrigger={this.search}/>
        {this.state.results.map((item,i) => <ImageCard key={i} url={item.images.fixed_height.url}/>)}
      </div>
    )
  }
}

export default App;
