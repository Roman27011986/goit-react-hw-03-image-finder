import React from 'react';
import styles from './Modal.module.css'
import {createPortal} from 'react-dom'
const modalRoot = document.querySelector('#modal-root')
class Modal extends React.Component {
    

    render() {
        return (
            createPortal(
                <div className={styles.Overlay} onClick={this.props.onBackDrop}>
                <div className={styles.Modal}>
                  <img src={this.props.onModalImg} alt="" />
                </div>
                </div>,
                modalRoot
        )
     )
 }
}
    


export default Modal
