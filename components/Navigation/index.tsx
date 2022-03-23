import React from 'react'
import Styles from './Navigation.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function index() {
  return (
    <>
      <nav className={Styles.navbar}>
        <a href='#'>Travelly</a>
        <a className={Styles.btn}>
          Download
          {/* <FontAwesomeIcon icon={faArrowRight} /> */}
        </a>
      </nav>
    </>
  )
}
