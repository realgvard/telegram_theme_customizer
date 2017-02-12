import { getProcessedData } from './helpers/dataBuilder';
import * as id from 'config/idElements.config';

const collection =  [
    {
        id: id.WINDOW_BG_OVER,
        items: [
            {
                tabName: 'Base',
                keys: ['windowBgOver']
            }
        ]
    },
    {
        id: id.DIALOGS_BG_ACTIVE,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsBgActive']
            }
        ]
    },
    {
        id: id.BACKGROUND,
        items: [
            {
                tabName: 'Image',
                keys: ['background'],
            }
        ]
    },
    {
        id: id.DIALOGS_BG,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsBg'],
            }
        ]
    },
    {
        id: id.DIALOGS_NAME_FG_ACTIVE,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsNameFgActive'],
            }
        ]
    },
    {
        id: id.DIALOGS_TEXT_FG_ACTIVE,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsTextFgActive'],
            }
        ]
    },
    {
        id: id.DIALOGS_UNREAD_BG,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsUnreadBg', 'dialogsUnreadBgMuted', 'dialogsUnreadFg', 'dialogsUnreadBgMutedOver'],
            },
        ]
    },
    {
        id: id.DIALOGS_NAME_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsNameFg'],
            }
        ]
    },
    {
        id: id.DIALOGS_TEXT_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsTextFg'],
            }
        ]
    },
    {
        id: id.MENU_ICON_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['menuIconFg'],
            },
            {
                tabName: 'Hover',
                keys: ['menuIconFgOver'],
            },
        ]
    },
    {
        id: id.FILTER_INPUT_INACTIVE_BG,
        items: [
            {
                tabName: 'Base',
                keys: ['filterInputInactiveBg'],
            },
            {
                tabName: 'Focus',
                keys: ['filterInputBorderFg', 'windowBg'],
            },
        ]
    },
    {
        id: id.TITLE_BG,
        items: [
            {
                tabName: 'Base',
                keys: ['titleBg', 'titleFg'],
            },
            {
                tabName: 'Active',
                keys: ['titleFgActive'],
            }
        ]
    },
    {
        id: id.DIALOGS_DATE_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsDateFg'],
            }
        ]
    },
    {
        id: id.DIALOGS_DATE_FG_ACTIVE,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsDateFgActive'],
            }
        ]
    },
    {
        id: id.WINDOW_ACTIVE_TEXT_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['windowActiveTextFg'],
            }
        ]
    },
    {
        id: id.DIALOGS_TEXT_FG_SERVICE_ACTIVE,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsTextFgServiceActive'],
            }
        ]
    },
    {
        id: id.HISTORY_PEER_USER_PIC_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['historyPeerUserpicFg',
                    'historyPeer1UserpicBg',
                    'historyPeer2UserpicBg',
                    'historyPeer3UserpicBg',
                    'historyPeer4UserpicBg',
                    'historyPeer5UserpicBg',
                    'historyPeer6UserpicBg',
                    'historyPeer7UserpicBg',
                    'historyPeer8UserpicBg',
                ],
            }
        ]
    },
    {
        id: id.TOP_BAR_BG,
        items: [
            {
                tabName: 'Base',
                keys: ['topBarBg'],
            }
        ]
    },
    {
        id: id.HISTORY_COMPOSE_AREA_BG,
        items: [
            {
                tabName: 'Base',
                keys: ['historyComposeAreaBg'],
            }
        ]
    },
    {
        id: id.TITLE_BUTTON_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['titleButtonFg', 'titleButtonFgOver', 'titleButtonBgOver'],
            },
        ]
    },
    {
        id: id.TITLE_BUTTON_CLOSE_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['titleButtonCloseFg', 'titleButtonCloseFgOver', 'titleButtonCloseBgOver'],
            },
        ]
    },
    {
        id: id.PLACEHOLDER_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['placeholderFg'],
            },
            {
                tabName: 'Focus',
                keys: ['placeholderFgActive'],
            },
            {
                tabName: 'Active',
                keys: ['windowFg', 'historyComposeAreaFg'],
            },
        ]
    },
    {
        id: id.DIALOGS_CHAT_ICON_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsChatIconFg'],
            }
        ]
    },
    {
        id: id.DIALOGS_CHAT_ICON_FG_OVER,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsChatIconFgOver'],
            }
        ]
    },
    {
        id: id.DIALOGS_CHAT_ICON_FG_ACTIVE,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsChatIconFgActive'],
            }
        ]
    },
    {
        id: id.DIALOGS_BG_OVER,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsBgOver'],
            }
        ]
    },
    {
        id: id.DIALOGS_SENT_ICON_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsSentIconFg'],
            }
        ]
    },
    {
        id: id.DIALOGS_SENT_ICON_FG_ACTIVE,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsSentIconFgActive'],
            }
        ]
    },
    {
        id: id.DIALOGS_UNREAD_BG_MUTED_ACTIVE,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsUnreadBgMutedActive'],
            }
        ]
    },
    {
        id: id.DIALOGS_NAME_FG_OVER,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsNameFgOver'],
            }
        ]
    },
    {
        id: id.DIALOGS_TEXT_FG_OVER,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsTextFgOver'],
            }
        ]
    },
    {
        id: id.DIALOGS_TEXT_FG_SERVICE_OVER,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsTextFgServiceOver'],
            }
        ]
    },
    {
        id: id.DIALOGS_DATE_FG_OVER,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsDateFgOver'],
            }
        ]
    },
    {
        id: id.DIALOGS_SENT_ICON_FG_OVER,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsSentIconFgOver'],
            }
        ]
    },
    {
        id: id.DIALOGS_VERIFIED_ICON_BG,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsVerifiedIconBg', 'dialogsVerifiedIconFg'],
            },
        ]
    },
    {
        id: id.DIALOGS_VERIFIED_ICON_BG_OVER,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsVerifiedIconBgOver', 'dialogsVerifiedIconFgOver'],
            },
        ]
    },
    {
        id: id.DIALOGS_VERIFIED_ICON_BG_ACTIVE,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsVerifiedIconBgActive', 'dialogsVerifiedIconFgActive'],
            }
        ]
    },
    {
        id: id.DIALOGS_DRAFT_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsDraftFg'],
            }
        ]
    },
    {
        id: id.DIALOGS_DRAFT_FG_OVER,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsDraftFgOver'],
            }
        ]
    },
    {
        id: id.DIALOGS_DRAFT_FG_ACTIVE,
        items: [
            {
                tabName: 'Base',
                keys: ['dialogsDraftFgActive'],
            }
        ]
    },
    {
        id: id.MSG_IN,
        items: [
            {
                tabName: 'Base',
                keys: ['msgInBg'],
            },
            {
                tabName: 'Selected',
                keys: ['msgInBgSelected'],
            }
        ]
    },
    {
        id: id.MSG_OUT,
        items: [
            {
                tabName: 'Base',
                keys: ['msgOutBg'],
            },
            {
                tabName: 'Selected',
                keys: ['msgOutBgSelected'],
            }
        ]
    },
    {
        id: id.MSG_TEXT,
        items: [
            {
                tabName: 'Base',
                keys: ['windowFg'],
            }
        ]
    },
    {
        id: id.MSG_IN_DATE_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['msgInDateFg'],
            },
            {
                tabName: 'Selected',
                keys: ['msgInDateFgSelected'],
            }
        ]
    },
    {
        id: id.MSG_OUT_DATE_FG,
        items: [
            {
                tabName: 'Base',
                keys: ['msgOutDateFg'],
            },
            {
                tabName: 'Selected',
                keys: ['msgOutDateFgSelected'],
            }
        ]
    },
    {
        id: id.MSG_IN_REPLY,
        items: [
            {
                tabName: 'Base',
                keys: ['msgInReplyBarColor', 'msgInServiceFg', 'windowFg'],
            },
            {
                tabName: 'Selected',
                keys: ['msgInReplyBarSelColor', 'msgInServiceFgSelected'],
            }
        ]
    },
    {
        id: id.MSG_OUT_REPLY,
        items: [
            {
                tabName: 'Base',
                keys: ['msgOutReplyBarColor', 'msgOutServiceFg', 'windowFg'],
            },
            {
                tabName: 'Selected',
                keys: ['msgOutReplyBarSelColor', 'msgOutServiceFgSelected'],
            }
        ]
    },

];

export default getProcessedData(collection)
