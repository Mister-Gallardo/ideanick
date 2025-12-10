import { Link } from 'react-router-dom'

import css from './index.module.scss'

export type ButtonProps = { children: React.ReactNode; loading?: boolean }

export const Button = ({ children, loading = false }: ButtonProps) => {
  return (
    <button
      className={`${css.button} ${loading ? css.loading : ''}`}
      type="submit"
      disabled={loading}
    >
      {loading ? 'Submitting...' : children}
    </button>
  )
}

export const LinkButton = ({ children, to }: { children: React.ReactNode; to: string }) => {
  return (
    <Link className={css.button} to={to}>
      {children}
    </Link>
  )
}
