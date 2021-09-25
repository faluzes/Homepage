import React, { useState } from 'react'
import styles from './Counter.module.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.counter}>
      <h1>Earn Robux Online</h1>
      <p><b>Earn robux</b> by doing simple tasks: Playing games, Install free apps, completing surveys or inviting friends.</p>
      
    </div>
  )
}
