import React from 'react'
import Modal from 'react-modal'

function App() {

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}
      >Open modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}>
        Middle click here, then click on overlay
      </Modal>
    </div>
  )
}

export default App
