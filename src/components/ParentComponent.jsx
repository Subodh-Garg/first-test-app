import { useState, useEffect } from 'react'
import LeftChild from './LeftChild'
import RightChild from './RightChild'

let test = "intial";

const ParentComponent = () => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    console.log('🌳 Parent Component mounted')
    console.log(`
      Component Tree Structure:
      🌳 ParentComponent
      ├─ 🌿 LeftChild
      │  ├─ 🍃 LeftGrandChild1
      │  └─ 🍃 LeftGrandChild2
      └─ 🌿 RightChild
         ├─ 🍃 RightGrandChild1
         └─ 🍃 RightGrandChild2
    `)
  }, [])

  console.log('🌳 Parent Component rendering')

  return (
    <div className="parent">
      <h2>Component Tree Visualization</h2>
      <button className="count-button" onClick={() => setCount(count + 1)}>
        Count is: {count}
      </button>
      <button className="count-button" onClick={() => {test = "changed"}}>Change Test</button>
      <div className="children-container">
        <LeftChild test={test}/>
        <RightChild />
      </div>
    </div>
  )
}

export default ParentComponent 