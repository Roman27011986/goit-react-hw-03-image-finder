
import styles from './ImageGalleryItem.module.css'
const ImageGalleryItem = ({ largeImageURL, webformatURL,getlargeImageURL }) => (
    <li onClick={()=>getlargeImageURL(largeImageURL)} className={styles.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} />
    </li>
)


export default ImageGalleryItem

