export interface Color {
  h: number
  s: number
  l: number
  a: number
}

export interface ReactSliderColorPickerProps {
  disabled?: true | false
  color: Color
  handleChange: (string: string) => void
}
