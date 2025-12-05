import css from './index.module.scss'

export const Button = ({
  children,
  loading = false,
}: {
  children: React.ReactNode
  loading?: boolean
}) => {
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
