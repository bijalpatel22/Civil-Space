import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
	const renderedList = news.map((newItem) => {
		return (
			<NewsItem 
				// key={newItem.source.id} 
				newItem={newItem} 
			/>
		);
	});
	
	return (
		<div className="ui relaxed divided list">
			{renderedList}
		</div>
	); 
};

export default NewsList;
