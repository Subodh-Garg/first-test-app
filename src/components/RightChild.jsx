import { useEffect } from 'react'
import RightGrandChild1 from './RightGrandChild1'
import RightGrandChild2 from './RightGrandChild2'

const RightChild = () => {
  useEffect(() => {
    console.log('🌿 Right Child mounted')
  }, [])

  console.log('🌿 Right Child rendering')

  return (
    <div className="child">
      <h3>Right Child</h3>
      <RightGrandChild1 />
      <RightGrandChild2 />
    </div>
  )
}

export default RightChild 