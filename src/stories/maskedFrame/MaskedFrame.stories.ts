import { Container, Sprite, Texture } from "pixi.js";
import { MaskedFrame } from "../../MaskedFrame";
import { argTypes, getDefaultArgs } from "../../utils/storybook/argTypes";
import { preloadAssets } from '../../utils/storybook/loader';
import { centerElement } from '../../utils/storybook/resize';

const args = {
    borderColor: '#FFFFFF',
    borderWidth: 50,
    radius: 250,
};

// TODO: implement preloading
export const Graphics = ({
    borderColor,
    radius,
    borderWidth
}: any) => {
    const view = new Container();
    
    const assets = [
        `avatar.png`,
    ];
    
    preloadAssets(assets).then(() => {    
        borderColor = Number(borderColor.replace('#', '0x'));
    
        // Component usage !!!
        const frame = new MaskedFrame(
            new Sprite(Texture.from(`avatar.png`)), 
            {
                radius,
                borderWidth,
                borderColor,
            }
        );
    
        view.addChild(frame);
        
        centerElement(view);
    });
    
    return { view, resize: () => centerElement(view)};
};

export default {
    title: 'UI components/MaskedFrame/Graphics',
    argTypes: argTypes(args),
    args: getDefaultArgs(args),
};