import './sideBarInsertion.css'

export const SideBarInsertion = (): JSX.Element => {
    return(
        <div className='insertion-main'>
          <button className='insertion-main__text-button'>
            <img src="icons/text.png" className='insertion-main__text-icon'/>
            <p>Текст</p>
          </button>
          <p>Фигуры</p>
          <div className='insertion-main__triangle' />
          <div className='insertion-main__rectangle' />
          <div className='insertion-main__circle' />
          <p>Изображение</p>
          <button className='insertion-main__photo-button'>
            <img src="icons/add-picture.png" className='insertion-main__photo-icon'/>
            <p>Загрузить изображение</p>
          </button>
        </div>
    )
}