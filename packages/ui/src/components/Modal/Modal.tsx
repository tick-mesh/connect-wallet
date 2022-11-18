import { ReactNode } from 'react'

export interface IModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal = (props: IModalProps) => {
  // const onClose = () => {
  //   setIsOpen(false)
  //   props.isOpen
  // }
  return (
    <div style={{
      display: props.isOpen ? 'visible' : 'none'
    }}>
      {
        props.children
      }
    </div>
  )
}

export default Modal
