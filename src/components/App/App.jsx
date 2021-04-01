import React from 'react';

import styles from './App.module.css'

import Searchbar from '../Searchbar'
import ImageGallery from '../ImageGallery'
import Button from '../Button'
import newsApi from '../../services'
import PreLoader from '../Loader';
import Modal from '../Modal'

class App extends React.Component {

  state = {
    hits: [],
    currentPage: 1,
    serchQuery: '',
    isLoading: false,
    largeImageURL:''

  }

  

  componentDidUpdate(prevProps,prevState) {
    if (prevState.serchQuery !== this.state.serchQuery) {
      this.fetchHits()
    }
  }

  onChangeQuery = query => {
    this.setState({
      serchQuery: query,
      currentPage: 1,
      hits: [],
      
    })
  }

  fetchHits = () => {
    const { serchQuery, currentPage } = this.state;
    
    const options = {
      serchQuery,
      currentPage
    }
    this.setState({isLoading:true})
    newsApi(options)
    .then(hits => {
      this.setState(prevState => ({
        hits: [...prevState.hits,...hits],
        currentPage:prevState.currentPage + 1
      }))
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
    }).catch(err=>console.log(err)).finally(()=>this.setState({isLoading:false}))
  }
  
  getModalImg = (img) => {
    this.setState({ largeImageURL: img })
  }

  handleKeyDawn = (event) => {
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        this.setState({ largeImageURL: ''})
      }
    })
  }

  handleBackDrop = (event) => {
    if (event.currentTarget === event.target) {
      this.setState({ largeImageURL: ''})
    }
  }

  render() {
  

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={ this.onChangeQuery}/>
        <ImageGallery getlargeImageURL={this.getModalImg } hits={this.state.hits} />
        {this.state.hits.length > 0 && !this.state.isLoading && <Button onLoadMore={this.fetchHits} />}
        {this.state.isLoading && <PreLoader />}
        {this.state.largeImageURL && < Modal
          onModalImg={this.state.largeImageURL}
          onKeyDawn={this.handleKeyDawn}
          onBackDrop={this.handleBackDrop}
        />}
      </div>
    );


  }
}

export default App;
