import React, { useState } from 'react'
import styles from './Counter.module.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.counter}>
      <h1>Earn Robux Online</h1>
      
      <p> <b> Earn Robux </b> by doing simple tasks: 
      Playing games, Install Free Apps, completing surveys or inviting friends.</p> 
    </div>
  )
}
