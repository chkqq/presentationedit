import './selectedTextSettings.css'

export const SelectedTextSettings = (): JSX.Element => {
    return (
        <div className='selected-text-settings-main'>
          <div className='selected-text-settings-main__text-parameters'>
          <div className='selected-text-setting-main__font-choose'>
            <p>Arial Выбрать шрифт</p>
          </div>
          <p>Выбрать размер шрифта</p>
          <div className='selected-text-settings-main__slide-background-color'>
            <div className='selected-text-settings-main__slide-background-color-circle' />
            <p>Выбрать цвета текста</p>
          </div>
            <button className='selected-text-settings-main__button'>
              <img src="icons/underline.png" />
            </button>
            <button className='selected-text-settings-main__button'>
              <img src="icons/bold.png" />
            </button>
          </div>
          <div>
            <button className='selected-text-settings-main__button'>
              <img src="icons/undo.png" />
            </button>
            <button className='selected-text-settings-main__button'>
              <img src="icons/redo.png" />
            </button>
          </div>
        </div>
    )
}
