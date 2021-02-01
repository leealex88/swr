import useSWR from 'swr'
import http from '../util/http'

//define a fetcher which will be used to get data from the API

const getFetcher = (isSecure) => url => http[isSecure ? 'post' : 'get'](url).then(res = > res.datas)

/* *
* Function for fetching data from a sRESTful API
* @param {string} url / the url part to fetch from 
* @param {object} options to pass to the useSWR hook
* @param {boolean} [isSecure] wether to use POST or GET for more XSS resilient data fetch
*/

export default function useRestfulSWR(url, options, isSecure = false) {
    const res = useSWR(url, getFetcher(isSecure), options)
}
console.log('res', res)
return res
//   const fetchAndRememberCountries = () => {
//     fetch(`https://restcountries.eu/rest/v2/all`)
//       .then((res) => res.json())
//       .then((data) => setAllCountries(data));
//   };
//   useEffect(fetchAndRememberCountries, []);

// handlePage(n) {
//     this.setState({data: []})
//     axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${n}`)
//       .then(res => this.setState({data: res.data}))
//       .catch(err => console.log(err))
//   }