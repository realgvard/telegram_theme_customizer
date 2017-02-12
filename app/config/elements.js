import scheme from './colors.tdesktop-theme';

// JS
import { mergeScheme } from './helpers/parserOfScheme';


const elements = [
    {
        key: 'windowBg',
    },
    {
        key: 'windowBgOver'
    },
    {
        key: 'dialogsBgActive'
    },
    {
        key: 'background',
        protected: true,
        label: 'Chose background image',
        type: 'file',
    },
    {
        key: 'dialogsBg'
    },
    {
        key: 'dialogsNameFgActive'
    },
    {
        key: 'dialogsTextFgActive'
    },
    {
        key: 'dialogsUnreadBg'
    },
    {
        key: 'dialogsUnreadBgMuted'
    },
    {
        key: 'dialogsUnreadFg'
    },
    {
        key: 'dialogsUnreadBgMutedOver'
    },
    {
        key: 'dialogsNameFg'
    },
    {
        key: 'dialogsTextFg'
    },
    {
        key: 'menuIconFg'
    },
    {
        key: 'menuIconFgOver'
    },
    {
        key: 'filterInputInactiveBg'
    },
    {
        key: 'filterInputBorderFg'
    },
    {
        key: 'windowBg'
    },
    {
        key: 'titleBg'
    },
    {
        key: 'titleFg'
    },
    {
        key: 'titleFgActive'
    },
    {
        key: 'dialogsDateFg'
    },
    {
        key: 'dialogsDateFgActive'
    },
    {
        key: 'windowActiveTextFg'
    },
    {
        key: 'dialogsTextFgServiceActive'
    },
    {
        key: 'historyPeerUserpicFg'
    },
    {
        key: 'historyPeer1UserpicBg'
    },
    {
        key: 'historyPeer2UserpicBg'
    },
    {
        key: 'historyPeer3UserpicBg'
    },
    {
        key: 'historyPeer4UserpicBg'
    },
    {
        key: 'historyPeer5UserpicBg'
    },
    {
        key: 'historyPeer6UserpicBg'
    },
    {
        key: 'historyPeer7UserpicBg'
    },
    {
        key: 'historyPeer8UserpicBg'
    },
    {
        key: 'topBarBg'
    },
    {
        key: 'historyComposeAreaBg'
    },
    {
        key: 'titleButtonFg'
    },
    {
        key: 'titleButtonFgOver'
    },
    {
        key: 'titleButtonBgOver'
    },
    {
        key: 'titleButtonCloseFg'
    },
    {
        key: 'titleButtonCloseFgOver'
    },
    {
        key: 'titleButtonCloseBgOver'
    },
    {
        key: 'placeholderFg'
    },
    {
        key: 'placeholderFgActive'
    },
    {
        key: 'windowFg'
    },
    {
        key: 'historyComposeAreaFg'
    },
    {
        key: 'dialogsChatIconFg'
    },
    {
        key: 'dialogsChatIconFgOver'
    },
    {
        key: 'dialogsChatIconFgActive'
    },
    {
        key: 'dialogsBgOver'
    },
    {
        key: 'dialogsSentIconFg'
    },
    {
        key: 'dialogsSentIconFgActive'
    },
    {
        key: 'dialogsUnreadBgMutedActive'
    },
    {
        key: 'dialogsNameFgOver'
    },
    {
        key: 'dialogsTextFgOver'
    },
    {
        key: 'dialogsTextFgServiceOver'
    },
    {
        key: 'dialogsDateFgOver'
    },
    {
        key: 'dialogsSentIconFgOver'
    },
    {
        key: 'dialogsVerifiedIconBg'
    },
    {
        key: 'dialogsVerifiedIconFg'
    },
    {
        key: 'dialogsVerifiedIconBgOver'
    },
    {
        key: 'dialogsVerifiedIconFgOver'
    },
    {
        key: 'dialogsVerifiedIconBgActive'
    },
    {
        key: 'dialogsVerifiedIconFgActive'
    },
    {
        key: 'dialogsDraftFg'
    },
    {
        key: 'dialogsDraftFgOver'
    },
    {
        key: 'dialogsDraftFgActive'
    },
    {
        key: 'msgInBg'
    },
    {
        key: 'msgInBgSelected'
    },
    {
        key: 'msgOutBg'
    },
    {
        key: 'msgOutBgSelected'
    },
    {
        key: 'msgInDateFg'
    },
    {
        key: 'msgInDateFgSelected'
    },
    {
        key: 'msgOutDateFg'
    },
    {
        key: 'msgOutDateFgSelected'
    },
    {
        key: 'msgInReplyBarColor',
    },
    {
        key: 'msgInReplyBarSelColor',
    },
    {
        key: 'msgInServiceFg'
    },
    {
        key: 'msgInServiceFgSelected'
    },
    {
        key: 'msgOutReplyBarColor',
    },
    {
        key: 'msgOutReplyBarSelColor',
    },
    {
        key: 'msgOutServiceFg'
    },
    {
        key: 'msgOutServiceFgSelected'
    },
    {
        key: 'historyOutIconFg'
    },
    {
        key: 'historyOutIconFgSelected'
    },
    {
        key: 'activeButtonBgRipple'
    },
    {
        key: 'windowBgRipple'
    },
    {
        key: 'msgServiceFg'
    }

]



export default mergeScheme(scheme, elements);