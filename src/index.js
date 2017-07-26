import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = ' AIzaSyAhOi5N-FdyluS0oQqoyw-Dfb5YxB5RcxM';

class App extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));