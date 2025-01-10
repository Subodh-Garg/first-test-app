import { useEffect } from 'react'

const RightGrandChild1 = () => {
  useEffect(() => {
    console.log('Right GrandChild 1 mounted')
  }, [])

  console.log('Right GrandChild 1 rendering')

  return <div className="grandchild">Right GrandChild 1</div>
}

export default RightGrandChild1 