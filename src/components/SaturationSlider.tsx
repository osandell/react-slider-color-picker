/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ReactElement, FC } from 'react'
import Slider from './Slider'

// interfaces
import { ReactSliderColorPickerProps } from '../interfaces'

export const SaturationSlider: FC<ReactSliderColorPickerProps> = (
  props
): ReactElement => {
  return (
    <Slider
      disabled={props.disabled}
      thumbBackground={`hsl(${props.color.h}, ${props.color.s}%, 50%)`}
      trackBackground={`linear-gradient(to right, hsl(${props.color.h}, 0%, 50%),  hsl(${props.color.h}, 100%, 50%))`}
      value={props.color.s}
      handleChange={props.handleChange}
    />
  )
}
