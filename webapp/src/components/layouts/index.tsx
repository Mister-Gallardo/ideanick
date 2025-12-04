import { Outlet } from 'react-router-dom'

import Header from './Header'
import css from './index.module.scss'

const MainLayout = () => (
  <div className={css.layout}>
    <Header />
    <div className={css.content}>
      <Outlet />
    </div>
  </div>
)

export default MainLayout
