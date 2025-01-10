import { useEffect } from 'react'

const LeftGrandChild2 = () => {
  useEffect(() => {
    console.log('Left GrandChild 2 mounted')
  }, [])

  console.log('Left GrandChild 2 rendering')

  return <div className="grandchild">Left GrandChild 2</div>
}

export default LeftGrandChild2 