/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useState } from 'react'

// @ts-ignore
import myImagePath from './checker-pattern.png'

import { HueSlider, SaturationSlider, LightnessSlider, AlphaSlider } from 'react-slider-color-picker'
import './index.css'

// interfaces
import { Color } from '../../src/interfaces'

const App = () => {

  const [color, setColor] = useState<Color>({h: 180, s: 100, l: 50, a: 1})

  const handleChangeHue = (newHue: string) => {
    setColor({...color, h: parseInt(newHue) * 3.6})
  }

  const handleChangeSaturation = (newSaturation: string) => {
    setColor({...color, s: parseInt(newSaturation)})
  }

  const handleChangeLightness = (newLightness: string) => {
    setColor({...color, l: parseInt(newLightness)})
  }
  
  const handleChangeAlpha = (newAlpha: string) => {
    setColor({...color, a: parseInt(newAlpha) / 100})
  }

  const root = css({
    width: '400px',
    height: '100vh',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  })
  
  const colorBox = css({
    width: '100px',
    height: '100px',
    margin: '50px auto 0 auto',
    background: `linear-gradient(hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a}), hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a})), url(${myImagePath})`
    // `linear-gradient(hsla(${props.color.h}, 100%, 50%, ${props.color.a}),  hsla(${props.color.h}, 100%, 50%, ${props.color.a})), url(${myImagePath})`
  })

  return (
    <div css={root}>
      <HueSlider handleChange={handleChangeHue} color={color} />
      <SaturationSlider handleChange={handleChangeSaturation} color={color} />
      <LightnessSlider handleChange={handleChangeLightness} color={color} />
      <AlphaSlider
        handleChange={handleChangeAlpha}
        color={color}
      />
      <div css={colorBox}></div>
    </div>
  )
}

export default App
