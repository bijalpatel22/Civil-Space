import React, {useState, useEffect} from 'react';
import newsApi from '../apis/newsApi';
import NewsList from './NewsList';

const SearchBar = () => {
	const [term, setTerm] = useState('');
	const [debouncedTerm, setDebouncedTerm] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() =>{
		const search = async () => {
			const response = await newsApi.get('/', {
				params: {
					q:debouncedTerm
				},
			});
			setResults(response.data.articles);
		};
		if(debouncedTerm && debouncedTerm.trim() !== "") {
			search();
		}
	}, [debouncedTerm]);

	return (
		<div>
			<div className="search-bar">
				<div style={{width:"100%", height:"70px", backgroundColor:"#606060"}}></div>
				<div className = "ui segment" style={{backgroundColor:"#D0D4D4", padding:"40px", marginTop:"0px"}}>
					<form 
					 className="ui form" 
					 onSubmit = {e => {
					 	e.preventDefault(); 
					 	setDebouncedTerm(term);
					 }} 
					>
						<div className = "field ui search">
							<div className="ui icon input">
								<input 
									type="text" 
									value={term} 
									onChange = {e => setTerm(e.target.value)}
									placeholder = "Search Something..."
								/>
								<i className="search icon"></i>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div style= {{paddingLeft:"70px", paddingTop:"50px"}}>
				<NewsList news={results}/>
			</div>
		</div>
	);
}

export default SearchBar;