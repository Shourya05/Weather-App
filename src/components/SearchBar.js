import React, { Component } from 'react'
import './SearchBar.scss'
export default class SearchBar extends Component {
    render() {
       
        return (
            <div className='search-bar'>
                <form className="search-bar__form" onSubmit={(e) => this.props.formSubmit(e)}>
                <button className="search-bar__button" type ="submit">
                    Search
                </button>
                <input className="search-bar__input" required id="search" onChange={ e => this.props.inputChange(e)}></input>
            </form>
            </div>
            
        )
    }
}
