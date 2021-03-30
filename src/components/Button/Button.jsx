import PropTypes from 'prop-types';
import styles from './Button.module.css'
const Button = ({ onLoadMore }) => (
    <button className={styles.Button} onClick={onLoadMore }>Load more</button>
)

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired
}
export default Button