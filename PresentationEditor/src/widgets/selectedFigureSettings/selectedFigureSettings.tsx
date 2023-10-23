import './selectedFigureSettings.css'
import React, { useState, ChangeEvent } from 'react'

export const SelectedFigureSettings = (): JSX.Element => {

  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (event:  ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
  };
    return (
        <div className='selected-text-settings-main'>
          <div className='selected-text-settings-main__slide-color'>
            <div className='selected-text-settings-main__slide-color-circle' />
            <p>Выбрать цвет фона</p>
          </div>
          <div className='selected-text-settings-main__slide-color'>
            <div className='selected-text-settings-main__slide-color-circle' />
            <p>Выбрать цвета обводки</p>
          </div>
          <p>Размер выбранного элемента</p>
          <div className="slider-container">
            <input
              type="range"
              min="1"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
              className="slider"
            />
            <div className="slider-value">{sliderValue}</div>
          </div>
        </div>
    )
}
