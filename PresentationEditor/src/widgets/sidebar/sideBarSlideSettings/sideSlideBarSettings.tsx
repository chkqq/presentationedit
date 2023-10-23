import './sideBarSlideSettings.css'

export const SideBarSlideSettings = (): JSX.Element => {
    return (
        <div className='slide-settings-main'>
          <div className='slide-settings-main__slide-background-color'>
            <div className='slide-settings-main__slide-background-color-circle' />
            <p>Выбрать цвет фона</p>
          </div>
          <button className='slide-settings-main__photo-button'>
            <img src="icons/add-picture.png" className='slide-settings-main__photo-icon'/>
            <p>Загрузить фоновое изображение</p>
          </button>
        </div>
    )
}