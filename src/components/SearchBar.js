import React, {Component} from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    state = {
        term: ''
    };

    onTermChange = (e) => {
        this.setState({term: e.target.value});
    };

    onSearchSubmit = (e) => {
        e.preventDefault();
        const {onSearch} = this.props;

        if (onSearch)
            onSearch(this.state.term);
    };

    render() {
        return (
            <div className="searchBar">
                <form onSubmit={this.onSearchSubmit}>
                    <input
                        placeholder={this.props.placeholder}
                        type="text"
                        value={this.state.term}
                        onChange={this.onTermChange}
                    />
                </form>
            </div>
        );
    }
};

SearchBar.defaultProps = {
    placeholder: 'Search'
};

export default SearchBar;