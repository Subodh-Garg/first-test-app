import { useEffect } from 'react'

const LeftGrandChild1 = () => {
  useEffect(() => {
    console.log('🍃 Left GrandChild 1 mounted')
  }, [])

  console.log('🍃 Left GrandChild 1 rendering')

  return <div className="grandchild animate-render">Left GrandChild 1</div>
}

export default LeftGrandChild1 