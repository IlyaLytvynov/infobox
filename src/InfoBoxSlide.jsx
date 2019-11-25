import React, { useState } from 'react'
import styles from './InfoBoxSlide.module.css'

/***
 * @param Object
 * @param img string
 * @param title string
 * @param description string
 */
export const InfoBoxSlide = ({ img, title, description, isActive, style }) => {
  const [isExpand, toggleExpend] = useState(false)
  return (
    <div
      style={style}
      className={`${styles.slide} 
        ${isActive ? styles.active : ''} ${isExpand ? styles.expand : ''}`}
    >
      <div className={styles.thumbnail}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <p className={styles.description}>
          {`${description.slice(0, 50)}${!isExpand ? '...' : ''}`}
          <span className={styles.segment}>{description.slice(50)}</span>
        </p>
      </div>
      <div className={styles.footer}>
        <button className={styles.btn} onClick={() => toggleExpend(!isExpand)}>
          Toggle
        </button>
      </div>
    </div>
  )
}
