/** @jsx jsx */
import { jsx, css, CSSObject } from '@emotion/react'
import React, { ReactElement, FC, useState } from 'react'

interface SliderProps {
  disabled?: true | false
  thumbBackground: string
  trackBackground: string
  value: number
  handleMoveSlider: (value: number) => void
}

const trackHeight = 0.88
const thumbDiameterSmall = 1.4
const thumbDiameterBig = 1.6

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

  const thumb: CSSObject = {
    boxSizing: 'border-box',
    border: 'none',
    width: `${currentThumbDiameter}em`,
    height: `${currentThumbDiameter}em`,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor: '#faf6f6',
    borderWidth: '0.37em',
    boxShadow: `${
      props.disabled ? '0.1em 0.1em 0.3em 0 rgba(0, 0, 0, 0.25)' : '0.1em 0.1em 0.3em 0 rgba(0, 0, 0, 0.75)'
    }`,
    background: `${props.disabled ? '#ddd' : props.thumbBackground}`,
  }

  const track: CSSObject = {
    boxSizing: 'border-box',
    border: 'none',
    height: `${trackHeight}em`,
    borderRadius: `${trackHeight / 2}em`,
    background: `${props.disabled ? '#ddd' : props.trackBackground}`,
  }

  const inputStyle = css({
    touchAction: 'none',
    WebkitAppearance: 'none',
    width: '100%',
    height: `${thumbDiameterBig + 0.65}em`,
    margin: 0,
    padding: 0,
    font: '1em/1 arial, sans-serif',

    '&::-webkit-slider-runnable-track': track,
    '&::-moz-range-track': track,
    '&::-ms-track': track,
    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      marginTop: `${0.5 * (trackHeight - currentThumbDiameter)}em`,
      '&:active': {
        marginTop: `${0.5 * (trackHeight - thumbDiameterBig)}em`,
        width: `${thumbDiameterBig}em`,
        height: `${thumbDiameterBig}em`,
      },
      '@media (hover: hover)': {
        '&:hover': {
          marginTop: `${!props.disabled && 0.5 * (trackHeight - thumbDiameterBig)}em`,
          width: `${!props.disabled && thumbDiameterBig}em`,
          height: `${!props.disabled && thumbDiameterBig}em`,
        },
      },

      ...thumb,
    },
    '&::-moz-range-thumb': thumb,
    '&::-ms-thumb': { marginTop: 0, ...thumb },
    '&::-ms-tooltip': { display: 'none' },
  })

  return (
    <input
      type="range"
      onChange={handleChange}
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
      css={inputStyle}
      value={props.value}
      disabled={props.disabled}
    />
  )
}

Slider.defaultProps = {
  disabled: false,
}

export default Slider
