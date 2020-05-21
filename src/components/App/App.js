import React from 'react'
import Search from '../Search/Search'
import Yelp from '../../util/Yelp'
import BusinessList from '../BusinessList/BusinessList'
import './App.css'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            businesses: []
        }
        this.searchYelp = this.searchYelp.bind(this);
    }
    render(){
        return(
            <div className='App'>
                <h1>ravenous</h1>
                <Search searchYelp={this.searchYelp}/>
                <BusinessList businesses={this.state.businesses} />
            </div>
        )
    }

    searchYelp(term,location,sortBy){
        return Yelp.search(term,location,sortBy).then(businesses=>{
            this.setState({
                businesses
            })
        })
    }
}

export default App; 

/* import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import Search from '../Search/Search';

import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  ssearchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <Search searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App; */