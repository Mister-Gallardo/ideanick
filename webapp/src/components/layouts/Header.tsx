import { Link } from 'react-router-dom'

import { useMe } from '../../lib/ctx'
import {
  getAllIdeasRoute,
  getEditProfileRoute,
  getNewIdeaRoute,
  getSignInRoute,
  getSignOutRoute,
  getSignUpRoute,
} from '../../lib/routes/routeHelpers'

import css from './index.module.scss'

const Header = () => {
  const me = useMe()

  return (
    <header className={css.header}>
      <b className={css.logo}>Ideanick</b>

      <nav className={css.menu}>
        <Link className={css.link} to={getAllIdeasRoute()}>
          All Ideas
        </Link>
        {me ? (
          <>
            <Link className={css.link} to={getNewIdeaRoute()}>
              New Idea
            </Link>
            <Link className={css.link} to={getEditProfileRoute()}>
              Edit Profile
            </Link>
            <Link className={css.link} to={getSignOutRoute()}>
              Log Out ({me.nick})
            </Link>
          </>
        ) : (
          <>
            <Link className={css.link} to={getSignUpRoute()}>
              Sign Up
            </Link>
            <Link className={css.link} to={getSignInRoute()}>
              Sign In
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
