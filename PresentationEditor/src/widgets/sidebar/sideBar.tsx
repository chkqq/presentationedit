import React, { useState } from 'react'
import './sideBar.css'
import { SideBarInsertion } from './sideBarInsertion/sideBarInsertion'
import { SideBarSlideSettings } from './sideBarSlideSettings/sideSlideBarSettings'

export const SideBar = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState('insert')

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab)
  }

  return (
    <div className="side-bar-main">
      <div className="side-bar-main__tabs">
        <button
          className={`side-bar-main__button ${selectedTab === 'insert' ? 'selected-tab' : ''}`}
          onClick={() => handleTabClick('insert')}
        >
          Вставка
        </button>
        <button
          className={`side-bar-main__button ${selectedTab === 'edit' ? 'selected-tab' : ''}`}
          onClick={() => handleTabClick('edit')}
        >
          Редактирование слайдов
        </button>
      </div>
      <div className="side-bar-main__content">
        {selectedTab === 'insert' && (
          <div>
            <SideBarInsertion />
          </div>
        )}
        {selectedTab === 'edit' && (
          <div>
            <SideBarSlideSettings />
          </div>
        )}
      </div>
    </div>
  )
}
