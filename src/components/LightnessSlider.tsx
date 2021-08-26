/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ReactElement, FC } from 'react'
import Slider from './Slider'

// interfaces
import { ReactSliderColorPickerProps } from '../interfaces'

export const LightnessSlider: FC<ReactSliderColorPickerProps> = (
  props
): ReactElement => {
  const handleMoveSlider = (value: number) => {
    props.handleChangeColor({
      h: props.color.h,
      s: props.color.s,
      l: value,
      a: props.color.a
    })
  }

  return (
    <Slider
      disabled={props.disabled}
      thumbBackground={`hsl(${props.color.h}, 100%, ${props.color.l}%)`}
      trackBackground={`linear-gradient(to right, hsl(${props.color.h}, 100%, 0%),  hsl(${props.color.h}, 100%, 50%), hsl(${props.color.h}, 100%, 100%))`}
      value={props.color.l}
      handleMoveSlider={handleMoveSlider}
    />
  )
}
