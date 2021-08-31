import { FC } from 'react';
interface SliderProps {
    disabled?: boolean;
    thumbBackground: string;
    trackBackground: string;
    value: number;
    handleMoveSlider: (value: number) => void;
}
declare const Slider: FC<SliderProps>;
export default Slider;
