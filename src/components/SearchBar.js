import React from 'react';

class SearchBar extends React.Component {
	state = {term:''};

	onInputChange = (event) => {
		this.setState({term:event.target.value});
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar">
				<div style={{width:"100%", height:"70px", backgroundColor:"#606060"}}></div>
				<div className = "ui segment" style={{backgroundColor:"#D0D4D4", padding:"40px", marginTop:"0px"}}>
					<form className="ui form" onSubmit = {this.onFormSubmit} >
						<div className = "field ui search">
							<div className="ui icon input">
								<input 
									type="text" 
									value={this.state.term} 
									onChange = {this.onInputChange}
									placeholder = "Search Something..."
								/>
								<i className="search icon"></i>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}


export default SearchBar;