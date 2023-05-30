import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-modal';

import '../index.css'
import exampleCoffee from './images/examples/stocklatte.png'

Modal.setAppElement('#root')
  

export default function Home() {

  // Image zoom modal
  const [modalIsOpen,setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  function openModal(img: string) {
    setIsOpen(true);
    setSelectedImage(img);
  }
  function closeModal(){
    setIsOpen(false);
    setSelectedImage(null);
  }

  return (
  <div className='flex flex-col items-center justify-center mt-40 sm:mt-8'>
    <div id="core">
      <table className='justify-center items-center'>
        <tbody>
          <tr className='font-bold text-5xl sm:text-6xl text-amber-900 font-titlefont text-center'>
            <td>
              Paradise Coffee
            </td>
          </tr>
          <tr>
            <td className='flex items-center justify-center mt-12'>
              
            </td>
          </tr>
          <tr>
            <td className='flex items-center justify-center mb-40 sm:mb-20'>
              <button className='text-lg p-2 border-2 border-amber-900 rounded-lg bg-pink-200 shadow-lg hover:scale-110 transition-transform hover:bg-amber-900 hover:text-white'><CustomLink to="/ordering">Order Before Arriving!</CustomLink></button>
            </td>
          </tr>
          <tr className="col-span-2 text-5xl sm:text-6xl text-amber-900 font-titlefont text-center">
            <td className="mx-auto">
              Check out my work!
            </td>
          </tr>   
        </tbody>
      </table>
    </div>
    <div id="examples">
      <table>
        <tbody>
          <tr>
            <td>
              <img className="max-w-xs mr-2 rounded-2xl" src={exampleCoffee} alt="coffee1" onClick={() => openModal(exampleCoffee)} />
            </td>
            <td>
              <img className="max-w-xs ml-2 rounded-2xl" src={exampleCoffee} alt="coffee2" onClick={() => openModal(exampleCoffee)} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      <Modal 
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="imagesmodal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          maxWidth: '50%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'transparent',
          border: 'none',
        },
      }}
    >
      <button onClick={closeModal} className='absolute text-black bg-white rounded-md p-2 border-2 border-black hover:scale-105'>Close</button>
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src={selectedImage || ''} 
          alt="Enlarged" 
          style={{ 
            objectFit: 'contain', 
            maxWidth: '100%', 
            maxHeight: '100%',
            borderRadius: '10px',
          }} 
        />
      </div>
    </Modal>
  </div>
  )
}

function CustomLink({ to, children, ...props }: { to: string, children: React.ReactNode}) {
  return (
    <Link to={ to } style={{ textDecoration: 'none', color: 'var(--coffee)' }} { ...props }>
      { children }
    </Link>
  )
}