/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ReactElement, FC } from 'react'
import Slider from './Slider'

// interfaces
import { ReactSliderColorPickerProps } from '../interfaces'

export const LightnessSlider: FC<ReactSliderColorPickerProps> = (
  props
): ReactElement => {
  return (
    <Slider
      disabled={props.disabled}
      thumbBackground={`hsl(${props.color.h}, 100%, ${props.color.l}%)`}
      trackBackground={`linear-gradient(to right, hsl(${props.color.h}, 100%, 0%),  hsl(${props.color.h}, 100%, 50%), hsl(${props.color.h}, 100%, 100%))`}
      handleChange={props.handleChange}
    />
  )
}
