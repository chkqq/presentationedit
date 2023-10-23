import './mainEditor.css'
import { Header } from '../../widgets/header/header'
import { SideBar } from '../../widgets/sidebar/sideBar'
import { SelectedTextSettings } from '../../widgets/selectedTextSettings/selectedTextSettings'
// import { SelectedFigureSettings } from '../../widgets/selectedFigureSettings/selectedFigureSettings'

export const MainEditorPage = (): JSX.Element => {
    return (
        <div className='main-editor'>
           <Header />
            <div className='main-editor__presentation' >
              <SideBar />
              <div className='main-editor__presentation-and-settings'>
                <SelectedTextSettings />
                <div className='main-editor__presentation-box'>
                  <div className='presentation-box__buttons-to-move-through-the-slides'>
                    <button className='presentation-box__button'>
                      <img src="icons\double-arrow-up.png" />
                    </button>
                    <button className='presentation-box__button'>
                      <img src="icons\up-arrow.png" />
                    </button>
                    <button className='presentation-box__button'>
                      <img src="icons\down-arrow.png" />
                    </button>
                    <button className='presentation-box__button'>
                      <img src="icons\double-arrow-down.png" />
                    </button>
                  </div>
                  <div className='presentation-box__selected-slides'>
                    <div className='presentation-box__selected-slide' />
                    <div className='presentation-box__add-slide-button'>+</div>
                  </div>
                  <div className='presentation-box__delete-button'>
                    <button className='presentation-box__button'>
                      <img src="icons\delete.png" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}