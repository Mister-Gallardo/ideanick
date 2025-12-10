import { createRef } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import css from './index.module.scss'

export const layoutContentElRef = createRef<HTMLDivElement>()

const MainLayout = () => (
  <div className={css.layout}>
    <Header />
    <div className={css.content} ref={layoutContentElRef}>
      <Outlet />
    </div>
  </div>
)

export default MainLayout
