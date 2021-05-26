import React, { useState } from 'react'

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

  return (
    <>
      <HueSlider handleChange={handleChangeHue} color={color} />
      <SaturationSlider handleChange={handleChangeSaturation} color={color} />
      <LightnessSlider handleChange={handleChangeLightness} color={color} />
      <AlphaSlider
        handleChange={handleChangeAlpha}
        color={color}
      />
    </>
  )
}

export default App
