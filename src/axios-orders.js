import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://sanathrel-react-burger.firebaseio.com/'
});

export default instance;