import { RxDiscordLogo } from 'react-icons/rx';
import { FaWpforms } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineFileText, AiOutlineMail } from 'react-icons/ai'

export const data = [
  {
    id: '1',
    question: '社團未來發展？',
    answer: '我們會以培育我校資訊科技相關知識與相關人才為主。提升我校在資訊南區競賽的競爭力。而且會寫程式的人都很帥喔 :D',
  },
  {
    id: '2',
    question: '如何加入我們的社團？',
    answer: '加入我們的社團非常簡單。你可以填寫我們的加入申請表格並提交給我們。我們會在收到申請後盡快聯繫你。',
  },
  {
    id: '3',
    question: '會不會很難入門?會不會很冷門?',
    answer: '理論上來說不會，我們是從基礎語法開始學，就算是完全新手也能加入一起學習！我校在資訊方面雖然沒有太多資源，但應該還是有許多同學對於此科別有興趣，為此我們統一從基礎語法開始學習',
  },
  {
    id: '4',
    question: '跟資訊學程有什麼差別？',
    answer: '請查閱 HACKMD 裡面有較完整的資訊歐',
  },
  {
    id: '5',
    question: '學習內容?對課業會不會有影響?',
    answer: '請查閱 HACKMD 裡面有較完整的資訊歐',
  },
  {
    id: '6',
    question: '更多問題...?',
    answer: '點擊下方的綠色按鈕 導向HackMD的FAQ部分!',
  },
  // 其他卡片的資料...
];

export const LinksTree = [
  {
    title: '資訊社連屬表單',
    subtitle: '如果你想成為我們的一份子，歡迎您填寫這份表單!',
    url: 'https://forms.gle/MgvNeo6yReBAzwWM9',
    icon: <FaWpforms size={65}/>
  },
  {
    title: 'Instagram',
    subtitle: '南大附中資訊社的IG',
    url: 'https://www.instagram.com/ashs.nutn_csirc/',
    icon: <BsInstagram size={65}/>
  },
  {
    title: 'HackMD',
    subtitle: '南大附中資訊社-計畫書',
    url: 'https://hackmd.io/@YuDong/tntcsh_csirc',
    icon: <AiOutlineFileText size={65}/>
  },
  {
    title: 'Discord',
    subtitle: '專屬於社員的Discord社群，我們正在建置中...',
    url: null,
    icon: <RxDiscordLogo size={65}/>
  },

]

export const contactInfo = [
  {
    title: "IG社團帳號",
    descrption: "社團的Instagram帳號\n可以盡情提問:D",
    url: 'https://www.instagram.com/ashs.nutn_csirc/',
    icon: <BsInstagram size={45}/>
  },
  {
    title: "士育IG",
    descrption: "如果你想聯繫士育 \n點擊此處前往",
    url: 'https://instagram.com/sy._318/',
    icon: <BsInstagram size={45}/>
  },
  {
    title: "YuDong IG",
    descrption: "如果你想聯繫YuDong \n 你可能需要追蹤才能發送訊息 x(",
    url: 'https://instagram.com/yudong.jar/',
    icon: <BsInstagram size={45}/>
  },
]

export const contactInfo2 = [
  {
    title: "社團電子信箱",
    descrption: "點擊我直接導向至 \n寫信給社團信箱",
    url: 'mailto:ashs.nutn.csirc@gmail.com',
    icon: <AiOutlineMail size={45}/>
  },
  {
    title: "士育 Discord",
    descrption: "如果你想使用Discord 聯繫士育 \n 點擊此處",
    url: 'https://www.discordapp.com/users/872320690160795689',
    icon: <RxDiscordLogo size={45}/>
  },
  {
    title: "YuDong Dc",
    descrption: "如果你想用Discord 聯繫YuDung\n 你這次可以很輕鬆的聯繫 :D",
    url: 'https://www.discordapp.com/users/386421220221911062',
    icon: <RxDiscordLogo size={45}/>
  },

]
