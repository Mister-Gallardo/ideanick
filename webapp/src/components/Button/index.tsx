import { Link } from 'react-router-dom'

import css from './index.module.scss'

type ButtonColor = 'red' | 'green'

export type ButtonProps = { children: React.ReactNode; loading?: boolean; color?: ButtonColor }

export const Button = ({ children, loading = false, color }: ButtonProps) => {
  return (
    <button
      className={`${css.button} ${loading ? css.loading : ''}`}
      type="submit"
      disabled={loading}
      style={{ backgroundColor: color }}
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
