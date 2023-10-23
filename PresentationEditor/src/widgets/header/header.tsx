import React, { useState } from 'react';
import './header.css'

export const Header = (): JSX.Element => {

  const [isEditing, setEditing] = useState(false);
  const [presentationTitle, setPresentationTitle] = useState('Название презентации');

  const handleEditClick = () => {
    setEditing(!isEditing);
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPresentationTitle(event.target.value);
  }

  return (
    <div className='header-main'>
      <div className='header-main__box-menu'>
        <p>Редактор презентаций</p>
      </div>
      <div className='header-main__box-name'>
        {isEditing ? (
          <div className='header-main__box-name'>
            <input
              type="text"
              className='header-main__box-name-input'
              value={presentationTitle}
              onChange={handleTitleChange}
            />
            <button className='header-main__button' onClick={handleEditClick}>
              <img src="icons\thumb-up.png" className='header-main__icons' />
            </button>
          </div>
        ) : (
          <div className='header-main__box-name'>
            <p>{presentationTitle}</p>
            <button className='header-main__button' onClick={handleEditClick}>
              <img src="icons\edit.png" className='header-main__icons' />
            </button>
          </div>
        )}
      <button className='header-main__button' style={{color: '#ff8a65'}}>
        <img src="icons\download.png" className='header-main__icons' />
      </button>
      </div>
    </div>
  )
}