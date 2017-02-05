import baseElements from './elements';
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
                keys: ['menuIconFg', 'menuIconFgOver'],
            },
        ]
    },
    {
        id: id.FILTER_INPUT_INACTIVE_BG,
        items: [
            {
                tabName: 'Base',
                keys: ['filterInputInactiveBg', 'filterInputBorderFg', 'windowBg'],
            },
        ]
    },
    {
        id: id.TITLE_BG,
        items: [
            {
                tabName: 'Base',
                keys: ['titleBg'],
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
                keys: ['placeholderFg', 'placeholderFgActive', 'windowFg', 'historyComposeAreaFg'],
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
];


function getProcessedData(data) {
    let result = [];


    data.forEach(obj => {

        let tempGroup = {};

        tempGroup.id = obj.id;
        tempGroup.collection = [];


        obj.items.forEach(({ tabName, keys }) => {

            let tempItem = {};

            tempItem.tabName = tabName;
            tempItem.elements = [];


            keys.forEach(key => {

                tempItem.elements.push(_.find(baseElements, { key }));
            });

            tempGroup.collection.push(tempItem);
        });

        result.push(tempGroup);
    });

    return result;
}

getProcessedData(collection)


export default [
    {
        id: id.WINDOW_BG_OVER,
        settings: [
            {
                id: id.WINDOW_BG_OVER,
                key: 'windowBgOver',
                type: 'colorPicker',
                label: 'Background-color',
                color: '#f1f1f1',
            }
        ]
    },
    {
        id: id.DIALOGS_BG_ACTIVE,
        settings: [
            {
                id: id.DIALOGS_BG_ACTIVE,
                key: 'dialogsBgActive',
                type: 'colorPicker',
                label: 'Background-color',
                color: '#44A0DC',
            }
        ]
    },
    {
        id: id.BACKGROUND,
        settings: [
            {
                id: id.BACKGROUND,
                key: 'background',
                protected: true,
                type: 'file',
                label: 'Chose background images'
            }
        ]
    },
    {
        id: id.DIALOGS_BG,
        settings: [
            {
                id: id.DIALOGS_BG,
                key: 'dialogsBg',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Background-color'
            }
        ]
    },
    {
        id: id.DIALOGS_NAME_FG_ACTIVE,
        settings: [
            {
                id: id.DIALOGS_NAME_FG_ACTIVE,
                key: 'dialogsNameFgActive',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Text-color'
            }
        ]
    },
    {
        id: id.DIALOGS_TEXT_FG_ACTIVE,
        settings: [
            {
                id: id.DIALOGS_TEXT_FG_ACTIVE,
                key: 'dialogsTextFgActive',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Text-color'
            }
        ]
    },
    {
        id: id.DIALOGS_UNREAD_BG,
        settings: [
            {
                id: id.DIALOGS_UNREAD_BG,
                key: 'dialogsUnreadBg',
                color: '#40a7e3',
                type: 'colorPicker',
                label: 'Background-color'
            },
            {
                id: id.DIALOGS_UNREAD_BG_MUTED,
                key: 'dialogsUnreadBgMuted',
                color: '#bbbbbb',
                type: 'colorPicker',
                label: 'Background-color'
            },
            {
                id: id.DIALOGS_UNREAD_FG,
                key: 'dialogsUnreadFg',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Text-color'
            },
            {
                id: id.DIALOGS_UNREAD_BG_MUTED_OVER,
                key: 'dialogsUnreadBgMutedOver',
                color: '#bbbbbb',
                type: 'colorPicker',
                label: 'Background-hover-color'
            }
        ]
    },
    {
        id: id.DIALOGS_NAME_FG,
        settings: [
            {
                id: id.DIALOGS_NAME_FG,
                key: 'dialogsNameFg',
                color: '#222222',
                type: 'colorPicker',
                label: 'Text-color'
            }
        ]
    },
    {
        id: id.DIALOGS_TEXT_FG,
        settings: [
            {
                id: id.DIALOGS_TEXT_FG,
                key: 'dialogsTextFg',
                color: '#999999',
                type: 'colorPicker',
                label: 'Text-color'
            }
        ]
    },
    {
        id: id.MENU_ICON_FG,
        settings: [
            {
                id: id.MENU_ICON_FG,
                key: 'menuIconFg',
                color: '#a8a8a8',
                type: 'colorPicker',
                label: 'Icon-color'
            },
            {
                id: id.MENU_ICON_FG_OVER,
                key: 'menuIconFgOver',
                color: '#999999',
                type: 'colorPicker',
                label: 'Icon-hover-color'
            }
        ]
    },
    {
        id: id.FILTER_INPUT_INACTIVE_BG,
        settings: [
            {
                id: id.FILTER_INPUT_INACTIVE_BG,
                key: 'filterInputInactiveBg',
                color: '#f1f1f1',
                type: 'colorPicker',
                label: 'Background-color'
            },
            {
                id: id.FILTER_INPUT_BORDER_FG,
                key: 'filterInputBorderFg',
                color: '#54c3f3',
                type: 'colorPicker',
                label: 'Border-focus-color'
            },
            {
                id: id.WINDOW_BG,
                key: 'windowBg',
                type: 'colorPicker',
                label: 'Background-color',
                color: '#ffffff',
            }
        ]
    },
    {
        id: id.TITLE_BG,
        settings: [
            {
                id: id.TITLE_BG,
                key: 'titleBg',
                color: '#f1f1f1',
                type: 'colorPicker',
                label: 'Background-color'
            }
        ]
    },
    {
        id: id.DIALOGS_DATE_FG,
        settings: [
            {
                id: id.DIALOGS_DATE_FG,
                key: 'dialogsDateFg',
                color: '#999999',
                type: 'colorPicker',
                label: 'Text-color'
            }
        ]
    },
    {
        id: id.DIALOGS_DATE_FG_ACTIVE,
        settings: [
            {
                id: id.DIALOGS_DATE_FG_ACTIVE,
                key: 'dialogsDateFgActive',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Text-color'
            }
        ]
    },
    {
        id: id.WINDOW_ACTIVE_TEXT_FG,
        settings: [
            {
                id: id.WINDOW_ACTIVE_TEXT_FG,
                key: 'windowActiveTextFg',
                color: '#168acd',
                type: 'colorPicker',
                label: 'Text-color'
            }
        ]
    },
    {
        id: id.DIALOGS_TEXT_FG_SERVICE_ACTIVE,
        settings: [
            {
                id: id.DIALOGS_TEXT_FG_SERVICE_ACTIVE,
                key: 'dialogsTextFgServiceActive',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Text-color'
            }
        ]
    },
    {
        id: id.HISTORY_PEER_USER_PIC_FG,
        settings: [
            {
                id: id.HISTORY_PEER_USER_PIC_FG,
                key: 'historyPeerUserpicFg',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Text-color'
            },
            {
                id: id.HISTORY_PEER_1_USER_PIC_BG,
                key: 'historyPeer1UserpicBg',
                color: '#e17076',
                type: 'colorPicker',
                label: 'Background-color (1)'
            },
            {
                id: id.HISTORY_PEER_2_USER_PIC_BG,
                key: 'historyPeer2UserpicBg',
                color: '#7bc862',
                type: 'colorPicker',
                label: 'Background-color (2)'
            },
            {
                id: id.HISTORY_PEER_3_USER_PIC_BG,
                key: 'historyPeer3UserpicBg',
                color: '#e5ca77',
                type: 'colorPicker',
                label: 'Background-color (3)'
            },
            {
                id: id.HISTORY_PEER_4_USER_PIC_BG,
                key: 'historyPeer4UserpicBg',
                color: '#65aadd',
                type: 'colorPicker',
                label: 'Background-color (4)'
            },
            {
                id: id.HISTORY_PEER_5_USER_PIC_BG,
                key: 'historyPeer5UserpicBg',
                color: '#a695e7',
                type: 'colorPicker',
                label: 'Background-color (5)'
            },
            {
                id: id.HISTORY_PEER_6_USER_PIC_BG,
                key: 'historyPeer6UserpicBg',
                color: '#ee7aae',
                type: 'colorPicker',
                label: 'Background-color (6)'
            },
            {
                id: id.HISTORY_PEER_7_USER_PIC_BG,
                key: 'historyPeer7UserpicBg',
                color: '#6ec9cb',
                type: 'colorPicker',
                label: 'Background-color (7)'
            },
            {
                id: id.HISTORY_PEER_8_USER_PIC_BG,
                key: 'historyPeer8UserpicBg',
                color: '#faa774',
                type: 'colorPicker',
                label: 'Background-color (8)'
            },
        ]
    },
    {
        id: id.TOP_BAR_BG,
        settings: [
            {
                id: id.TOP_BAR_BG,
                key: 'topBarBg',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Background-color'
            }
        ]
    },
    {
        id: id.HISTORY_COMPOSE_AREA_BG,
        settings: [
            {
                id: id.HISTORY_COMPOSE_AREA_BG,
                key: 'historyComposeAreaBg',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Background-color'
            }
        ]
    },
    {
        id: id.TITLE_BUTTON_FG,
        settings: [
            {
                id: id.TITLE_BUTTON_FG,
                key: 'titleButtonFg',
                color: '#ababab',
                type: 'colorPicker',
                label: 'Icon-color'
            },
            {
                id: id.TITLE_BUTTON_FG_OVER,
                key: 'titleButtonFgOver',
                color: '#9a9a9a',
                type: 'colorPicker',
                label: 'Icon-hover-color'
            },
            {
                id: id.TITLE_BUTTON_BG_OVER,
                key: 'titleButtonBgOver',
                color: '#e5e5e5',
                type: 'colorPicker',
                label: 'Background-hover-color'
            }
        ]
    },
    {
        id: id.TITLE_BUTTON_CLOSE_FG,
        settings: [
            {
                id: id.TITLE_BUTTON_CLOSE_FG,
                key: 'titleButtonCloseFg',
                color: '#ababab',
                type: 'colorPicker',
                label: 'Icon-color'
            },
            {
                id: id.TITLE_BUTTON_CLOSE_FG_OVER,
                key: 'titleButtonCloseFgOver',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Icon-hover-color'
            },
            {
                id: id.TITLE_BUTTON_CLOSE_BG_OVER,
                key: 'titleButtonCloseBgOver',
                color: '#e81123',
                type: 'colorPicker',
                label: 'Background-hover-color'
            }
        ]
    },
    {
        id: id.PLACEHOLDER_FG,
        settings: [
            {
                id: id.PLACEHOLDER_FG,
                key: 'placeholderFg',
                color: '#999999',
                type: 'colorPicker',
                label: 'Text-color'
            },
            {
                id: id.PLACEHOLDER_FG_ACTIVE,
                key: 'placeholderFgActive',
                color: '#aaaaaa',
                type: 'colorPicker',
                label: 'Focus-color'
            },
            {
                id: id.WINDOW_FG,
                key: 'windowFg',
                color: '#000000',
                type: 'colorPicker',
                label: '"Search" color'
            },
            {
                id: id.HISTORY_COMPOSE_AREA_FG,
                key: 'historyComposeAreaFg',
                color: '#000000',
                type: 'colorPicker',
                label: '"Write a message" color'
            }
        ]
    },
    {
        id: id.DIALOGS_CHAT_ICON_FG,
        settings: [
            {
                id: id.DIALOGS_CHAT_ICON_FG,
                key: 'dialogsChatIconFg',
                color: '#222222',
                type: 'colorPicker',
                label: 'Icon-color'
            }
        ]
    },
    {
        id: id.DIALOGS_CHAT_ICON_FG_OVER,
        settings: [
            {
                id: id.DIALOGS_CHAT_ICON_FG_OVER,
                key: 'dialogsChatIconFgOver',
                color: '#222222',
                type: 'colorPicker',
                label: 'Icon-color'
            }
        ]
    },
    {
        id: id.DIALOGS_CHAT_ICON_FG_ACTIVE,
        settings: [
            {
                id: id.DIALOGS_CHAT_ICON_FG_ACTIVE,
                key: 'dialogsChatIconFgActive',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Icon-color'
            }
        ]
    },
    {
        id: id.DIALOGS_BG_OVER,
        settings: [
            {
                id: id.DIALOGS_BG_OVER,
                key: 'dialogsBgOver',
                color: '#f1f1f1',
                type: 'colorPicker',
                label: 'Background-hover-color'
            }
        ]
    },
    {
        id: id.DIALOGS_SENT_ICON_FG,
        settings: [
            {
                id: id.DIALOGS_SENT_ICON_FG,
                key: 'dialogsSentIconFg',
                color: '#5dc452',
                type: 'colorPicker',
                label: 'Background-hover-color'
            }
        ]
    },
    {
        id: id.DIALOGS_SENT_ICON_FG_ACTIVE,
        settings: [
            {
                id: id.DIALOGS_SENT_ICON_FG_ACTIVE,
                key: 'dialogsSentIconFgActive',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Icon-color'
            }
        ]
    },
    {
        id: id.DIALOGS_UNREAD_BG_MUTED_ACTIVE,
        settings: [
            {
                id: id.DIALOGS_UNREAD_BG_MUTED_ACTIVE,
                key: 'dialogsUnreadBgMutedActive',
                color: '#c6e1f7',
                type: 'colorPicker',
                label: 'Icon-color'
            }
        ]
    },
    {
        id: id.DIALOGS_NAME_FG_OVER,
        settings: [
            {
                id: id.DIALOGS_NAME_FG_OVER,
                key: 'dialogsNameFgOver',
                color: '#222222',
                type: 'colorPicker',
                label: 'Text-hover-color'
            }
        ]
    },
    {
        id: id.DIALOGS_TEXT_FG_OVER,
        settings: [
            {
                id: id.DIALOGS_TEXT_FG_OVER,
                key: 'dialogsTextFgOver',
                color: '#919191',
                type: 'colorPicker',
                label: 'Text-hover-color'
            }
        ]
    },
    {
        id: id.DIALOGS_TEXT_FG_SERVICE_OVER,
        settings: [
            {
                id: id.DIALOGS_TEXT_FG_SERVICE_OVER,
                key: 'dialogsTextFgServiceOver',
                color: '#168acd',
                type: 'colorPicker',
                label: 'Text-hover-color'
            }
        ]
    },
    {
        id: id.DIALOGS_DATE_FG_OVER,
        settings: [
            {
                id: id.DIALOGS_DATE_FG_OVER,
                key: 'dialogsDateFgOver',
                color: '#999999',
                type: 'colorPicker',
                label: 'Text-hover-color'
            }
        ]
    },
    {
        id: id.DIALOGS_SENT_ICON_FG_OVER,
        settings: [
            {
                id: id.DIALOGS_SENT_ICON_FG_OVER,
                key: 'dialogsSentIconFgOver',
                color: '#5dc452',
                type: 'colorPicker',
                label: 'Text-hover-color'
            }
        ]
    },
    {
        id: id.DIALOGS_VERIFIED_ICON_BG,
        settings: [
            {
                id: id.DIALOGS_VERIFIED_ICON_BG,
                key: 'dialogsVerifiedIconBg',
                color: '#40a7e3',
                type: 'colorPicker',
                label: 'Icon-background-color'
            },
            {
                id: id.DIALOGS_VERIFIED_ICON_FG,
                key: 'dialogsVerifiedIconFg',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Icon-background-color'
            }
        ]
    },
    {
        id: id.DIALOGS_VERIFIED_ICON_BG_OVER,
        settings: [
            {
                id: id.DIALOGS_VERIFIED_ICON_BG_OVER,
                key: 'dialogsVerifiedIconBgOver',
                color: '#40a7e3',
                type: 'colorPicker',
                label: 'Icon-hover-background-color'
            },
            {
                id: id.DIALOGS_VERIFIED_ICON_FG_OVER,
                key: 'dialogsVerifiedIconFgOver',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Icon-hover-background-color'
            }
        ]
    },
    {
        id: id.DIALOGS_VERIFIED_ICON_BG_ACTIVE,
        settings: [
            {
                id: id.DIALOGS_VERIFIED_ICON_BG_ACTIVE,
                key: 'dialogsVerifiedIconBgActive',
                color: '#ffffff',
                type: 'colorPicker',
                label: 'Icon-active-background-color'
            },
            {
                id: id.DIALOGS_VERIFIED_ICON_FG_ACTIVE,
                key: 'dialogsVerifiedIconFgActive',
                color: '#419fd9',
                type: 'colorPicker',
                label: 'Icon-active-background-color'
            }
        ]
    },
    {
        id: id.DIALOGS_DRAFT_FG,
        settings: [
            {
                id: id.DIALOGS_DRAFT_FG,
                key: 'dialogsDraftFg',
                color: '#dd4b39',
                type: 'colorPicker',
                label: 'Text-color'
            }
        ]
    },
    {
        id: id.DIALOGS_DRAFT_FG_OVER,
        settings: [
            {
                id: id.DIALOGS_DRAFT_FG_OVER,
                key: 'dialogsDraftFgOver',
                color: '#dd4b39',
                type: 'colorPicker',
                label: 'Text-hover-color'
            }
        ]
    },
    {
        id: id.DIALOGS_DRAFT_FG_ACTIVE,
        settings: [
            {
                id: id.DIALOGS_DRAFT_FG_ACTIVE,
                key: 'dialogsDraftFgActive',
                color: '#c6e1f7',
                type: 'colorPicker',
                label: 'Text-active-color'
            }
        ]
    },
]