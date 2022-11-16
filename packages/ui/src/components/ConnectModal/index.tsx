import { useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '../Modal'
import WalletList from '../WalletList'

const ConnectModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }
  const onConnect = () => {
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader/>
        <ModalCloseButton/>
        <ModalBody>
          <WalletList onConnect={onConnect}></WalletList>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ConnectModal
