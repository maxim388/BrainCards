import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radioGroup'

export type CustomRadioGroupProps<T extends FieldValues> = UseControllerProps<T> & RadioGroupProps

export const ControlledRadio = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  errorMessage,
  name,
  options,
  rules,
  shouldUnregister,
  ...rest
}: CustomRadioGroupProps<T>) => {
  const {
    field: { onChange, ref, value },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <RadioGroup
      {...rest}
      disabled={disabled}
      errorMessage={error?.message}
      name={name}
      onChange={onChange}
      options={options}
      ref={ref}
    />
  )
}
