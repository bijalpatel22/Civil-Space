import React from 'react';
import newsApi from '../apis/newsApi';
import SearchBar from './SearchBar';
import NewsList from './NewsList';

class App extends React.Component {
	state={newsTerm:[]};

	onTermSubmit = async term => {
		const response = await newsApi.get('/', {
			params: {
				q:term
			}
		});

		this.setState({
			newsTerm:response.data.articles
		});

		// console.log(response.data.articles)
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit = {this.onTermSubmit}/>
				<div style= {{paddingLeft:"70px", paddingTop:"50px"}} >
					<NewsList news = {this.state.newsTerm}/>
				</div>
			</div>
		);
	}
}


export default App;