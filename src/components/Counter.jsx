import React, { useState } from 'react'
import styles from './Counter.module.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.counter}>
    </div>
  )
}
