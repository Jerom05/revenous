import React from 'react'
import './Search.css'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            term: '',
            location: '',
            sortBy: 'best_match'
        }
        this.sortByOptions ={
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed':'review_count'
        }
        this.handleSearch = this.handleSearch.bind(this);

    }

    render(){
        return(
            <div className='SearchBar'>
                <h2>Revenous</h2>
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className='SearchBar-fields'>
                    <input onChange= {this.handleTermChange}placeholder= "Search Businesses"/>
                    <input onChange={this.handleLocationChange}placeholder = "where?"/> 
                </div>
                <div className='SearchBar-submit'>
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
                

            </div>   
        )
    }

    renderSortByOptions = ()=>{
        return Object.keys(this.sortByOptions).map(sortByOption=>{
            let sortByOptionValue = this.sortByOptions[sortByOption]
            return(
            <li 
                className={this.getSortByClass(sortByOptionValue)}
                key={sortByOptionValue} 
                onClick={()=>this.handleSortByChange(sortByOptionValue)}
                >
                {sortByOption}
            </li>
            )
        })
    }

    handleTermChange = e =>{
        let term = e.target.value
        this.setState({
            term
        })
    }
    handleLocationChange= e =>{
        let location = e.target.value
        this.setState({
            location
        })
    }
    handleSortByChange=(sortByOption)=>{
        this.setState({
            sortBy: sortByOption
        })
    }
    getSortByClass=(sortByOption)=>{
        if(this.state.sortBy===sortByOption){
            return 'active'
        }
        return ''
    }
    handleSearch = event=>{
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)
        event.preventDefault();
    }
   
   
}
export default Search