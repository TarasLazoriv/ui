import { action } from '@storybook/addon-actions';
import { argTypes, getDefaultArgs } from '../helpers/argTypes';
import { Slider } from "../../Slider";
import { centerElement } from '../helpers/resize';
import { preloadAssets } from '../helpers/loader';
import { Container } from 'pixi.js';

const args = {
    min: 0,
    max: 100,
    value: 50,
    fontSize: 20,
    fontColor: '#000000',
    showValue: false,
    onChange: action('Slider changed'),
}

export const Single = ({
    min,
    max,
    value,
    fontSize,
    fontColor,
    onChange,
    showValue,
}: any) => {
    const view = new Container();

    const assets = [
        'slider_bg.png',
        'slider.png',
    ];

    preloadAssets(assets).then(() => {
        // Component usage !!!
        const singleSlider = new Slider({
            bg: 'slider_bg.png',
            slider: 'slider.png',
            min,
            max,
            value,
            valueTextStyle: {
                fill: fontColor,
                fontSize: fontSize,
            },
            showValue,
        });

        singleSlider.onChange.connect((value) => {
            onChange(`Slider changed > ${value}`)
        });

        view.addChild(singleSlider);

        centerElement(view);
    });

    return { view, resize: () => centerElement(view)};
};

export default {
    title: 'UI components/Slider/Sprite',
    argTypes: argTypes(args),
    args: getDefaultArgs(args),
};