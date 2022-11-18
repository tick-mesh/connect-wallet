import { ReactNode } from 'react'

interface IModalBodyProps {
  children: ReactNode
}

const ModalBody = (props: IModalBodyProps) => {
  return (
    <div>
      {
        props.children
      }
    </div>
  )
}

export default ModalBody
