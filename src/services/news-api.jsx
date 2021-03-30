import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api'

const newsApi = ({serchQuery = '',currentPage = 1}) => {
    return axios.get(`/?q=${serchQuery}&page=${currentPage}&key=19349561-1c4da8557b38d24bee91f401b&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response=>response.data.hits)
}

export default newsApi