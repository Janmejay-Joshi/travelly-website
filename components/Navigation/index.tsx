import React from 'react'
import Styles from './Navigation.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function index() {
  return (
    <>
    <nav className={Styles.cover_nav}>
    <div className={Styles.nav}>
        
        <div className={Styles.product_name}>Travelly</div>
        <div className={Styles.download_btn}><button><p>Download Now <FontAwesomeIcon className={Styles.arrow} icon={faArrowRight} /></p></button></div>
    </div>
    </nav>
    </>
  )
}
