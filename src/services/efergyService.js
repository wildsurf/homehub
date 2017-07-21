import _axios from 'axios';

const apiEndpoint = 'http://www.energyhive.com/mobile_proxy';

const axios = _axios.create({
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json'
	}
});

export function loadInstant(token) {
	const getInstantEndpoint = `${apiEndpoint}/getInstant?token=${token}`;

	return axios
		.get(getInstantEndpoint)
		.then(response => response.data)
		.catch(err => alert(err));
}

export function getCurrentValuesSummary(token) {
    const endpoint = `${apiEndpoint}/getCurrentValuesSummary?token=${token}`;
	return axios
		.get(endpoint)
		.then(response => response.data)
		.catch(err => alert(err));
}
