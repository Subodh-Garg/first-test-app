import { useEffect } from 'react'

const RightGrandChild2 = () => {
  useEffect(() => {
    console.log('Right GrandChild 2 mounted')
  }, [])

  console.log('Right GrandChild 2 rendering')

  return <div className="grandchild">Right GrandChild 2</div>
}

export default RightGrandChild2 