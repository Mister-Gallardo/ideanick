import { Link } from 'react-router-dom'

import { getAllIdeasRoute, getNewIdeaRoute } from '../../lib/routes/routeHelpers'

import css from './index.module.scss'

const Header = () => (
  <header className={css.header}>
    <b className={css.logo}>Ideanick</b>

    <nav className={css.menu}>
      <Link className={css.link} to={getAllIdeasRoute()}>
        All Ideas
      </Link>
      <Link className={css.link} to={getNewIdeaRoute()}>
        New Idea
      </Link>
    </nav>
  </header>
)

export default Header
