import React, { ReactElement, FC, useState } from 'react'
import styled, { css } from 'styled-components'

interface SliderProps {
  disabled?: boolean
  thumbBackground: string
  trackBackground: string
  value: number
  handleMoveSlider: (value: number) => void
}

const trackHeight = 0.88
const thumbDiameterSmall = 1.4
const thumbDiameterBig = 1.6

type ContainerType = {
  currentThumbDiameter: number
  disabled: boolean
  thumbBackground: string
  trackBackground: string
}

const Thumb = (disabled: boolean, currentThumbDiameter: number, thumbBackground: string) => css`

    boxSizing: border-box;
    border: none;
    width: ${currentThumbDiameter}em;
    height: ${currentThumbDiameter}em;
    border-radius: 50%;
    border-style: solid;
    border-color: #faf6f6;
    border-width: 0.37em;
    box-shadow: ${disabled ? '0.1em 0.1em 0.3em 0 rgba(0, 0, 0, 0.25)' : '0.1em 0.1em 0.3em 0 rgba(0, 0, 0, 0.75)'};
    background: ${disabled ? '#d0d' : thumbBackground};
  }
`
const Track = (disabled: boolean, trackBackground: string) => css`
  box-sizing: border-box;
  border: none;
  height: ${trackHeight}em;
  border-radius: ${trackHeight / 2}em;
  background: ${disabled ? '#ddd' : trackBackground};
`
const Input = styled.input`
touch-action: none;
-webkit-appearance: none;
width: 100%;
height: ${thumbDiameterBig + 0.65}em;
margin: 0;
padding: 0;
font: 1em/1 arial, sans-serif;

&::-webkit-slider-runnable-track {${(props: ContainerType) => Track(props.disabled, props.trackBackground)};}
&::-moz-range-track {${(props: ContainerType) => Track(props.disabled, props.trackBackground)};}
&::-ms-track {${(props: ContainerType) => Track(props.disabled, props.trackBackground)};}
&::-webkit-slider-thumb {
  -webkit-appearance: none;
  margin-top: ${(props: ContainerType) => 0.5 * (trackHeight - props.currentThumbDiameter)}em;
  &:active {
    margin-top: ${0.5 * (trackHeight - thumbDiameterBig)}em;
    width: ${thumbDiameterBig}em;
    height: ${thumbDiameterBig}em;
  }

  @media (hover: hover) {
    &:hover {
      margin-top: ${(props: ContainerType) => !props.disabled && 0.5 * (trackHeight - thumbDiameterBig)}em;
      width: ${(props: ContainerType) => !props.disabled && thumbDiameterBig}em;
      height: ${(props: ContainerType) => !props.disabled && thumbDiameterBig}em;
    }
  }

  ...${(props: ContainerType) => Thumb(props.disabled, props.currentThumbDiameter, props.thumbBackground)};

}
&::-moz-range-thumb { 
  ${(props: ContainerType) => Thumb(props.disabled, props.currentThumbDiameter, props.thumbBackground)};
}
&::-ms-thumb { 
  marginTop: 0; 
  ...${(props: ContainerType) => Thumb(props.disabled, props.currentThumbDiameter, props.thumbBackground)};
}
&::-ms-tooltip { display: none };
`

const Slider: FC<SliderProps> = (props): ReactElement => {
  // This variable is used to make the mobile version work correctly.
  const [sliderIsBeingTouched, setSliderIsBeingTouched] = useState(false)
  const [sliderThumbIsBeingTouched, setSliderThumbIsBeingTouched] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleMoveSlider(parseInt(event.target.value))
    sliderIsBeingTouched && setSliderThumbIsBeingTouched(true)
  }

  const handleTouchStart = () => {
    setSliderIsBeingTouched(true)
  }

  const handleTouchEnd = () => {
    setSliderIsBeingTouched(false)
    setSliderThumbIsBeingTouched(false)
  }

  let currentThumbDiameter
  sliderThumbIsBeingTouched ? (currentThumbDiameter = thumbDiameterBig) : (currentThumbDiameter = thumbDiameterSmall)

  return (
    <Input
      type="range"
      onChange={handleChange}
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
      currentThumbDiameter={currentThumbDiameter}
      thumbBackground={props.thumbBackground}
      trackBackground={props.trackBackground}
      disabled={props.disabled ? true : false}
      value={props.value}
    />
  )
}

Slider.defaultProps = {
  disabled: false,
}

export default Slider
