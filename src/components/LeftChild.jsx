import { useState, useEffect, memo } from 'react'
import LeftGrandChild1 from './LeftGrandChild1'
import LeftGrandChild2 from './LeftGrandChild2'

const LeftChild = memo(({ test }) => {
  const [leftChildCount, setLeftChildCount] = useState(0);

  useEffect(() => {
    console.log('🌿 Left Child mounted')
  }, [])

  console.log('🌿 Left Child rendering')
  console.log("🔍 in left child, test:", test)

  return (
    <div className="child">
      <h3>Left Child</h3>
      <button className="count-button" onClick={() => setLeftChildCount(leftChildCount + 1)}>
        Left Child Count: {leftChildCount}
      </button>
      <div>Test prop value: {test}</div>
      <LeftGrandChild1 />
      <LeftGrandChild2 />
    </div>
  )
})

export default LeftChild 