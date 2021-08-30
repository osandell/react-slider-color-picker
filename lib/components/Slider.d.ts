import { FC } from 'react';
interface SliderProps {
    disabled?: true | false;
    thumbBackground: string;
    trackBackground: string;
    value: number;
    handleMoveSlider: (value: number) => void;
}
declare const Slider: FC<SliderProps>;
export default Slider;
