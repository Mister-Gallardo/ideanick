import css from './index.module.scss'

export const Loader = ({ type }: { type: 'page' | 'section' }) => (
  <span className={`${css.loader} ${css[`type-${type}`]}`} />
)
