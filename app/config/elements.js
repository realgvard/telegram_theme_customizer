import scheme from './colors.tdesktop-theme';

// JS
import { mergeScheme } from './helpers/parserOfScheme';


const elements = [
    {
        key: 'windowBg',
        type: 'colorPicker',
        label: 'Background-color',
    },
    {
        key: 'windowBgOver',
        type: 'colorPicker',
        label: 'Background-color',
    },
    {
        key: 'dialogsBgActive',
        type: 'colorPicker',
        label: 'Background-color',
    },
    {
        key: 'background',
        protected: true,
        type: 'file',
        label: 'Chose background images'
    },
    {
        key: 'dialogsBg',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'dialogsNameFgActive',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'dialogsTextFgActive',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'dialogsUnreadBg',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'dialogsUnreadBgMuted',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'dialogsUnreadFg',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'dialogsUnreadBgMutedOver',
        type: 'colorPicker',
        label: 'Background-hover-color'
    },
    {
        key: 'dialogsNameFg',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'dialogsTextFg',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'menuIconFg',
        type: 'colorPicker',
        label: 'Icon-color'
    },
    {
        key: 'menuIconFgOver',
        type: 'colorPicker',
        label: 'Icon-hover-color'
    },
    {
        key: 'filterInputInactiveBg',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'filterInputBorderFg',
        type: 'colorPicker',
        label: 'Border-color'
    },
    {
        key: 'windowBg',
        type: 'colorPicker',
        label: 'Background-color',
    },
    {
        key: 'titleBg',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'titleFg',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'titleFgActive',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'dialogsDateFg',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'dialogsDateFgActive',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'windowActiveTextFg',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'dialogsTextFgServiceActive',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'historyPeerUserpicFg',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'historyPeer1UserpicBg',
        type: 'colorPicker',
        label: 'Background-color (1)'
    },
    {
        key: 'historyPeer2UserpicBg',
        type: 'colorPicker',
        label: 'Background-color (2)'
    },
    {
        key: 'historyPeer3UserpicBg',
        type: 'colorPicker',
        label: 'Background-color (3)'
    },
    {
        key: 'historyPeer4UserpicBg',
        type: 'colorPicker',
        label: 'Background-color (4)'
    },
    {
        key: 'historyPeer5UserpicBg',
        type: 'colorPicker',
        label: 'Background-color (5)'
    },
    {
        key: 'historyPeer6UserpicBg',
        type: 'colorPicker',
        label: 'Background-color (6)'
    },
    {
        key: 'historyPeer7UserpicBg',
        type: 'colorPicker',
        label: 'Background-color (7)'
    },
    {
        key: 'historyPeer8UserpicBg',
        type: 'colorPicker',
        label: 'Background-color (8)'
    },
    {
        key: 'topBarBg',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'historyComposeAreaBg',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'titleButtonFg',
        type: 'colorPicker',
        label: 'Icon-color'
    },
    {
        key: 'titleButtonFgOver',
        type: 'colorPicker',
        label: 'Icon-hover-color'
    },
    {
        key: 'titleButtonBgOver',
        type: 'colorPicker',
        label: 'Background-hover-color'
    },
    {
        key: 'titleButtonCloseFg',
        type: 'colorPicker',
        label: 'Icon-color'
    },
    {
        key: 'titleButtonCloseFgOver',
        type: 'colorPicker',
        label: 'Icon-hover-color'
    },
    {
        key: 'titleButtonCloseBgOver',
        type: 'colorPicker',
        label: 'Background-hover-color'
    },
    {
        key: 'placeholderFg',
        type: 'colorPicker',
        label: '"Search" and "Write a message" color'
    },
    {
        key: 'placeholderFgActive',
        type: 'colorPicker',
        label: 'Search" and "Write a message" color'
    },
    {
        key: 'windowFg',
        type: 'colorPicker',
        label: 'Text color'
    },
    {
        key: 'historyComposeAreaFg',
        type: 'colorPicker',
        label: '"Write a message" color'
    },
    {
        key: 'dialogsChatIconFg',
        type: 'colorPicker',
        label: 'Icon-color'
    },
    {
        key: 'dialogsChatIconFgOver',
        type: 'colorPicker',
        label: 'Icon-color'
    },
    {
        key: 'dialogsChatIconFgActive',
        type: 'colorPicker',
        label: 'Icon-color'
    },
    {
        key: 'dialogsBgOver',
        type: 'colorPicker',
        label: 'Background-hover-color'
    },
    {
        key: 'dialogsSentIconFg',
        type: 'colorPicker',
        label: 'Background-hover-color'
    },
    {
        key: 'dialogsSentIconFgActive',
        type: 'colorPicker',
        label: 'Icon-color'
    },
    {
        key: 'dialogsUnreadBgMutedActive',
        type: 'colorPicker',
        label: 'Icon-color'
    },
    {
        key: 'dialogsNameFgOver',
        type: 'colorPicker',
        label: 'Text-hover-color'
    },
    {
        key: 'dialogsTextFgOver',
        type: 'colorPicker',
        label: 'Text-hover-color'
    },
    {
        key: 'dialogsTextFgServiceOver',
        type: 'colorPicker',
        label: 'Text-hover-color'
    },
    {
        key: 'dialogsDateFgOver',
        type: 'colorPicker',
        label: 'Text-hover-color'
    },
    {
        key: 'dialogsSentIconFgOver',
        type: 'colorPicker',
        label: 'Text-hover-color'
    },
    {
        key: 'dialogsVerifiedIconBg',
        type: 'colorPicker',
        label: 'Icon-background-color'
    },
    {
        key: 'dialogsVerifiedIconFg',
        type: 'colorPicker',
        label: 'Icon-background-color'
    },
    {
        key: 'dialogsVerifiedIconBgOver',
        type: 'colorPicker',
        label: 'Icon-hover-background-color'
    },
    {
        key: 'dialogsVerifiedIconFgOver',
        type: 'colorPicker',
        label: 'Icon-hover-background-color'
    },
    {
        key: 'dialogsVerifiedIconBgActive',
        type: 'colorPicker',
        label: 'Icon-active-background-color'
    },
    {
        key: 'dialogsVerifiedIconFgActive',
        type: 'colorPicker',
        label: 'Icon-active-background-color'
    },
    {
        key: 'dialogsDraftFg',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'dialogsDraftFgOver',
        type: 'colorPicker',
        label: 'Text-hover-color'
    },
    {
        key: 'dialogsDraftFgActive',
        type: 'colorPicker',
        label: 'Text-active-color'
    },
    {
        key: 'msgInBg',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'msgInBgSelected',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'msgOutBg',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'msgOutBgSelected',
        type: 'colorPicker',
        label: 'Background-color'
    },
    {
        key: 'msgInDateFg',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'msgInDateFgSelected',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'msgOutDateFg',
        type: 'colorPicker',
        label: 'Text-color'
    },
    {
        key: 'msgOutDateFgSelected',
        type: 'colorPicker',
        label: 'Text-color'
    }

]


export default mergeScheme(scheme, elements);