/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FormikProps } from 'formik'

import css from './index.module.scss'

export const Input = ({
  name,
  label,
  formik,
}: {
  name: string
  label: string
  formik: FormikProps<any>
}) => {
  const value = formik.values[name]
  const error = formik.errors[name] as string | undefined
  const touched = formik.touched[name]
  const invalid = !!touched && !!error
  const disabled = formik.isSubmitting

  return (
    <div className={`${css.field} ${disabled ? css.disabled : ''}`}>
      <label className={css.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={`${css.input} ${invalid ? css.invalid : ''}`}
        type="text"
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value)
        }}
        onBlur={() => {
          void formik.setFieldTouched(name)
        }}
        value={value}
        name={name}
        id={name}
        disabled={formik.isSubmitting}
      />
      {invalid && <div className={css.error}>{error}</div>}
    </div>
  )
}
