import React, { useState } from 'react'
import styles from './InfoBox.module.css'
import PropTypes from 'prop-types'
import { InfoBoxSlide as Slide } from './InfoBoxSlide'

const InfoBox = ({ items }) => {
  const [activeIndex, setIndex] = useState(0)

  const increaseIndex = () => {
    const newIndex = activeIndex < items.length - 1 ? activeIndex + 1 : 0
    setIndex(newIndex)
  }

  const decreaseIndex = () => {
    const newIndex = activeIndex >= 1 ? activeIndex - 1 : items.length - 1
    setIndex(newIndex)
  }

  const toFirst = () => {
    setIndex(0)
  }

  const toLast = () => {
    setIndex(items.length - 1)
  }

  return (
    <div className={styles.infoBox}>
      <div className={styles.slides}>
        {items.map((item, i) => (
          <Slide
            key={i}
            {...item}
            isActive={activeIndex === i}
            style={{ transform: `translateX(${-100 * i}%)` }}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <button className={styles.control} onClick={toFirst}>
          {'<<<'}
        </button>
        <button className={styles.control} onClick={decreaseIndex}>
          {'<'}
        </button>
        <button className={styles.control} onClick={increaseIndex}>
          {'>'}
        </button>
        <button className={styles.control} onClick={toLast}>
          {'>>>'}
        </button>
      </div>
    </div>
  )
}

InfoBox.propTypes = {
  items: PropTypes.array
}

export { InfoBox }
