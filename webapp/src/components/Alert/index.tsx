import css from './index.module.scss'

export const Alert = ({
  color,
  children,
}: {
  color: 'red' | 'green'
  children: React.ReactNode
}) => {
  return <div className={`${css.alert} ${css[color]}`}>{children}</div>
}
