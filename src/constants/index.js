import { RxDiscordLogo } from 'react-icons/rx';
import { FaWpforms } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineFileText, AiOutlineMail } from 'react-icons/ai'

export const data = [
  {
    id: '1',
    question: '社團未來發展？',
    answer: '以培育我校資訊科技相關知識與人才為主。\n提升我校在資訊南區競賽的競爭力。\n而且會寫程式的人都很帥喔 :D',
  },
  {
    id: '2',
    question: '如何加入我們的社團？',
    answer: '只要將「資訊研究社」\n填在社團志願表的第一志願，就有機會加入喔！',
  },
  {
    id: '3',
    question: '會不會很難入門?會不會很冷門?',
    answer: '理論上來說不會，我們是從基礎語法開始學\n就算是完全新手也能加入一起學習！\n我校在資訊方面雖然沒有太多資源，\n但應該還是有許多同學對於此科別有興趣，\n為此我們統一從基礎語法開始學習',
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
    answer: '點擊下方的綠色按鈕 \n 導向HackMD的FAQ部分!',
  },
  // 其他卡片的資料...
];

export const LinksTree = [
  {
    title: '資訊社連署表單',
    subtitle: '連署時限已到期且通過門檻 \n 表單現時關閉。',
    icon: <FaWpforms size={65}/>,
  },
  {
    title: 'Instagram',
    subtitle: '南大附中資研社IG',
    url: 'https://www.instagram.com/nfirc_1st/',
    icon: <BsInstagram size={65}/>
  },
  {
    title: 'HackMD',
    subtitle: '南大附中資研社-創社計畫書',
    url: 'https://hackmd.io/@NFIRC/founding_plan',
    icon: <AiOutlineFileText size={65}/>
  },
  {
    title: 'Discord',
    subtitle: '開放給所有人的Discord社群 \n我們正在建置中...',
    url: null,
    icon: <RxDiscordLogo size={65}/>
  },

]

export const contactInfo = [
  {
    title: "IG社團帳號",
    descrption: "社團的Instagram帳號\n可以盡情提問:D",
    url: 'https://www.instagram.com/nfirc_1st/',
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
    descrption: "如果你想用Discord 聯繫YuDong \n 你這次可以很輕鬆的聯繫 :D",
    url: 'https://www.discordapp.com/users/386421220221911062',
    icon: <RxDiscordLogo size={45}/>
  },
]

export const FeatureCards = [
  {
    title: "探索與發現！",
    description: "Searching & Finding",
    img: "/images/codescreen.png"
  },
  {
    title: "與我們一起寫程式！",
    description: "Programming & Learning",
    img: "/images/cad.png"
  },
  {
    title: "思考與深化！",
    description: "Thinking & Deeping",
    img: "/images/thinking.png"
  },
]

