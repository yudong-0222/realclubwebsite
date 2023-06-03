import { RxDiscordLogo } from 'react-icons/rx';
import { FaWpforms } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineFileText } from 'react-icons/ai'

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
    question: '學習內容？對我的課業會不會有影響？',
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
    url: 'https://www.instagram.com/ashs.nutn_csirc/?hl=af',
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
