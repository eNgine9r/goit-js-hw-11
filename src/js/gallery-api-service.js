import axios from 'axios';

const API_KEY = '34447371-d1c04ab6613d972420d21a436';

export default class PixabyApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 40;
  }

  async fetchImages() {
    try {
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
      const response = await axios.get(url);
      const images = response.data;
      this.incrementPage();
      return images;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get imageQty() {
    return (this.page - 1) * this.perPage;
  }
}