import React from 'react';
import styles from './Searchbar.module.css'

class Searchbar extends React.Component {

  state = {
    
    query: ''
    
  }
  
  handleChange = event => {
    this.setState({query:event.currentTarget.value})
  }

  hendleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query)
   
  }



  render() {

    return (
      <header className={styles.Searchbar}>

        <form onSubmit={this.hendleSubmit} className={styles.SearchForm}>

    <button type="submit" className={styles.SearchFormButton}>
      <span className={styles.SearchFormButtonLabel}>Search</span>
    </button>

          <input
      onChange={this.handleChange}
      value={this.state.query}
      className={styles.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
          />
          
        </form>
        
</header>
    )
  }
}
   export default  Searchbar


