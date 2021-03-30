import PropTypes from 'prop-types'
import ImageGalleryItem from '../ImageGalleryItem'
import styles from './ImageGallery.module.css'

const ImageGallery = ({ hits ,getlargeImageURL}) => {
    return (
        <ul className={styles.ImageGallery}>
            {hits.map(({ id, largeImageURL, webformatURL }) => (
                <ImageGalleryItem
                    key={id}
                    largeImageURL={largeImageURL}
                    webformatURL={webformatURL}
                    getlargeImageURL={getlargeImageURL}
                    
                />

            ))}
           
        </ul>
    )
}

ImageGallery.propTypes = {
    getlargeImageURL:PropTypes.func.isRequired,
    hits: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired
    }))
};

export default ImageGallery

