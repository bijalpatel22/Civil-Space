import './NewsItem.css'
import React from 'react';

const NewsItem = ({ newItem }) => {
	return (
		<div className="one-item">
			<div className="item-divider ui divider"></div>
			<div className="news-item">
				<div className="news-item-header ui header">{newItem.title}</div>
				<div className="content">
					<p>{newItem.author} | {newItem.publishedAt}</p>
				</div>
				<div className="sub-content">
					<div className="text">
						<p>{newItem.description}</p>
						<a href={newItem.url}  target="_blank">
							<button className="ui inverted black button">Read More</button>
						</a>
					</div>
					<div className="image">
						<img 
							alt={newItem.title} 
							className="ui image"
							src = {newItem.urlToImage}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
