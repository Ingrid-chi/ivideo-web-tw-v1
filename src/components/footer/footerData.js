import visa from '../../assets/payment/visa.png';
import master from '../../assets/payment/masterCard.png';
import jcb from '../../assets/payment/JCB.png';
import linePay from '../../assets/payment/linePay.png';
import seven from '../../assets/payment/7-11.png';
import hiLife from '../../assets/payment/hiLife.png';
import bank from '../../assets/payment/bank.png';

export const footerData = [
  {
    id: 1,
    title: '關於 iVideo',
    items: [
      {
        id: 1,
        content: 'iVideo 介紹',
        url: '/introduce',
        disabled: false,
      },
      {
        id: 2,
        content: '取件點資訊',
        url: '/pick up',
        disabled: true,
      },
      {
        id: 3,
        content: '門市據點',
        url: '/store locations',
        disabled: true,
      },
    ],
  },
  {
    id: 2,
    title: '聯絡資訊',
    items: [
      {
        id: 1,
        subtitle: '企業團購 Line ID',
        content: '@thb9871p (請務必加上@)',
      },
      {
        id: 2,
        content: '客服團隊',
        url: '/customer service',
      },
    ],
  },
  {
    id: 3,
    title: '購物資訊',
    items: [
      {
        id: 1,
        content: '如何獲取優惠',
        url: '/discount',
      },
      {
        id: 2,
        content: '免費上網體驗活動',
        url: '/free events',
      },
    ],
  },
  {
    id: 4,
    title: '客服資訊',
    serviceGroup: [
      {
        id: 1,
        serviceTitle: '線上客服',
        items: [
          {
            id: 1,
            subtitle: '聯絡信箱',
            content: 'ivideo66306688@gmail.com',
          },
          {
            id: 2,
            subtitle: 'Line ID',
            content: '@ivideo (請務必加上@)',
          },
          {
            id: 3,
            subtitle: '服務時間',
            content1: '週一至週五 08:30~18:00',
            content2: '週六、週日及國定假日 09:00~18:00',
          },
        ],
      },
      {
        id: 2,
        serviceTitle: '語音客服',
        items: [
          {
            id: 1,
            subtitle: 'TEL',
            content: '(02)6630-6688',
          },
          {
            id: 2,
            subtitle: '服務時間',
            content: '週一至週五 08:30~18:00(不含國定假日)',
          },
        ],
      },
    ],
  },

  {
    id: 5,
    title: '付款方式',
    items: [
      {
        id: 1,
        image: visa,
      },
      {
        id: 2,
        image: master,
      },
      {
        id: 3,
        image: jcb,
      },
      {
        id: 4,
        image: linePay,
      },
      {
        id: 5,
        image: seven,
      },
      {
        id: 6,
        image: hiLife,
      },
      {
        id: 7,
        image: bank,
      },
    ],
  },
];

//

// const footerMockData = {
//   about: {
//     title: '關於 iVideo',
//     links: [
//       { label: 'iVideo 介紹', url: '/about' },
//       { label: '取得點數說明', url: '/points' },
//       { label: '門市據點', url: '/locations' },
//     ],
//   },
//   contact: {
//     title: '聯絡資訊',
//     lines: ['企業團購 Line ID：@thb9871p（請務必加上@）', '客服團隊'],
//   },
//   shopping: {
//     title: '購物資訊',
//     links: [
//       { label: '如何獲取優惠', url: '/discounts' },
//       { label: '免費上網體驗活動', url: '/trial' },
//     ],
//   },
//   onlineService: {
//     title: '線上客服',
//     email: 'ivideo66306688@gmail.com',
//     lineID: '@ivideo（請務必加上@）',
//     serviceHours: [
//       '週一至週五 08:30~18:00',
//       '週六、週日及國定假日 09:00~18:00',
//     ],
//   },
//   voiceService: {
//     title: '語音客服',
//     tel: '(02)6630-6688',
//     serviceHours: '週一至週五 08:30~18:00（不含國定假日）',
//   },
//   paymentMethods: [
//     'VISA',
//     'MasterCard',
//     'JCB',
//     'LINE Pay',
//     '街口支付',
//     '銀聯',
//     '銀行匯款',
//   ],
// };
