import React, { ReactElement, FC } from 'react'
import Slider from './Slider'
import myImagePath from './checker-pattern.png'

// interfaces
import { ReactSliderColorPickerProps } from '../interfaces'

export const AlphaSlider: FC<ReactSliderColorPickerProps> = (props): ReactElement => {
  const handleMoveSlider = (value: number) => {
    props.handleChangeColor({
      h: props.color.h,
      s: props.color.s,
      l: props.color.l,
      a: value / 100,
    })
  }

  return (
    <Slider
      disabled={props.disabled}
      thumbBackground={`linear-gradient(hsla(${props.color.h}, 100%, 50%, ${props.color.a}),  hsla(${props.color.h}, 100%, 50%, ${props.color.a})), url(${myImagePath})`}
      trackBackground={`linear-gradient(to right, hsla(${props.color.h}, 100%, 50%, 0),  hsl(${props.color.h}, 100%, 50%)), url(${myImagePath})`}
      value={props.color.a * 100}
      handleMoveSlider={handleMoveSlider}
    />
  )
}
