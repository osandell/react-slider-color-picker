# react-slider-color-picker

> A react color picker consisting of a set of sliders for adjusting hue, saturation, lightness and alpha.

[![NPM](https://img.shields.io/npm/v/react-slider-color-picker.svg)](https://www.npmjs.com/package/react-slider-color-picker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)



## Demo

Here is a live demo of the app: https://olofsandell.com/react-slider-color-picker

## Install

```bash
npm install --save react-slider-color-picker
```

## Usage

```tsx
import React, { useState } from 'react'

import { HueSlider, SaturationSlider, LightnessSlider, AlphaSlider } from 'react-slider-color-picker'

interface Color {
  h: number
  s: number
  l: number
  a: number
}

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
```

## License

MIT © [Olof Sandell](https://github.com/osandell)
