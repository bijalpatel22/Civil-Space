import axios from 'axios';

const KEY = 'b4e9b1b5bde5460d8e50d4ca7ce30fd1';

export default axios.create({
	baseURL: 'https://newsapi.org/v2/everything',
	params: {
		apiKey: KEY
	}
});