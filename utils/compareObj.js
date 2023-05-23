const { transform, isEqual, isArray, isObject } = require('lodash');

//v0
// export function difference(origObj, newObj) {
//   function changes(newObj, origObj) {
//     let arrayIndexCounter = 0;
//     return transform(newObj, function (result, value, key) {
//       if (!isEqual(value, origObj[key])) {
//         let resultKey = isArray(origObj) ? arrayIndexCounter++ : key;
//         result[resultKey] =  isObject(value) && isObject(origObj[key]) ? changes(value, origObj[key]) : value;
//       }
//     });
//   }
//   return changes(newObj, origObj);
// }

//v1
// export function difference(origObj, newObj) {
//   function changes(newObj, origObj) {
//     let arrayIndexCounter = 0;
//     return transform(newObj, function (result, value, key) {
//       if (!isEqual(value, origObj[key])) {
//         let resultKey = isArray(origObj) ? arrayIndexCounter++ : key;
//         result[resultKey] = isArray(origObj)
//           ? value
//           : isObject(value) && isObject(origObj[key])
//           ? changes(value, origObj[key])
//           : value;
//       }
//     });
//   }
//   return changes(newObj, origObj);
// }

export function difference(origObj, newObj) {
  function changes(newObj, origObj) {
    return transform(newObj, function (result, value, key) {
      if (isArray(origObj)) {
        result[key] = value;
      } else if (!isEqual(value, origObj[key])) {
        result[key] = isArray(origObj)
          ? value
          : isObject(value) && isObject(origObj[key])
          ? changes(value, origObj[key])
          : value;
      }
    });
  }
  return changes(newObj, origObj);
}

export function formatdifference(obj) {
  for (let key of Object.keys(obj)) {
    let objBuffer = obj[key];
    isObject(objBuffer) && Object.keys(objBuffer).length === 0 && delete obj[key];
    isArray(objBuffer) && objBuffer.length === 0 && delete obj[key];
  }
  return obj;
}

export const obj1 = {
  merchantId: '8181441',
  appraisalState: 'NEW',
  accountInfo: {
    id: '1282320603',
    username: 'huynhphan.envi@gmail.com',
    fullname: null,
    phone: null,
    email: 'huynhphan.envi@gmail.com',
    accountType: null,
    gender: null,
  },
  connectionTypeList: [],
  isActive: false,
  isShift: null,
  createdAt: '2022-07-26T15:21:06.228Z',
  approvedAt: '2022-07-27T02:29:23.478Z',
  updatedAt: '2022-08-04T07:27:11.518Z',
  state: 'APPROVED',
  authType: 'PASSWORD',
  withdrawVerifyType: 'PASSWORD',
  minBalance: 0,
  stores: null,
  contactInfo: {
    birthday: '1992-02-10T17:00:00.000Z',
    name: 'Huỳnh Phan',
    email: 'huynhphan.envi@gmail.com',
    phone: '84978303434',
    identifyNumber: '352199143',
    issuePlace: 'An Giang',
    position: 'Chủ doanh nghiệp',
    issueDate: '2009-04-16T17:00:00.000Z',
  },
  businessOverview: {
    type: 'INDIVIDUAL',
    category: '5812',
    categoryName: 'Dịch vụ ăn uống',
    abbreviationName: 'Huỳnh Phan',
    brandName: 'HUỲNH PHAN',
    description: '',
    maxRange: 'less100m',
    connectionType: 'OFFLINE',
    homeUrl: '',
    taxCode: null,
    address: '871 Hà Hoàng Hổ',
    province: 'Tỉnh An Giang',
    district: 'Thành phố Long Xuyên',
    wards: 'Phường 14',
    locationIdentifyCode: '27169',
    maxAmountTransaction: 2000000,
    logo: null,
    averageIncome: '50000000',
    totalRevenue: null,
    operatingStaff: null,
    companyAddress: {
      name: null,
      address: 'Đường 3 tháng 2, Phường 14, Quận 10',
      phoneNumber: '0978303434',
    },
    shareholders: [],
  },
  crossCheckInfo: {
    isOwner: null,
    isUseBank: null,
    isAllowCrossCheck: null,
    crossCheckNum: 1,
    type: 'AUTO',
  },
  paymentMethodExtend: [
    {
      method: 1,
      extraData: '{"isTransferNow":false}',
    },
    {
      method: 2,
      extraData: '{"isTransferNow":false,"serviceCode":"WL1"}',
    },
    {
      method: 606,
      extraData: '{"isTransferNow":false,"type":"DEFAULT","supplier":null}',
    },
    {
      method: 612,
      extraData:
        '{"isTransferNow":false,"isCapture":true,"is3DSecure":true,"mid":"4","type":"MANUAL","supplier":"SACOMBANK"}',
    },
    {
      method: 622,
      extraData: '{"isTransferNow":false}',
    },
    {
      method: 624,
      extraData: '{"isTransferNow":false}',
    },
  ],
  paymentMethod: [
    {
      referId: 1,
    },
    {
      referId: 2,
    },
    {
      referId: 606,
    },
    {
      referId: 612,
    },
    {
      referId: 622,
    },
    {
      referId: 624,
    },
  ],
  paymentMethodUse: [1, 2, 606, 612, 624],
  delegate: [
    {
      accountId: 1282320603,
      fullname: 'Huỳnh Phan',
      displayName: 'Huỳnh Phan',
      phone: null,
      email: 'huynhphan.envi@gmail.com',
      isActivePasswordTrading: false,
      passwordTrading: null,
      role: 'OWNER',
      tokenVerify: null,
      username: 'huynhphan.envi@gmail.com',
      isActive: true,
      state: 'APPROVED',
    },
  ],
  isSecurityPayout: false,
  notifyTelegram: {
    payout: null,
    payment: null,
  },
  currency: 'VND',
  operator: [],
  emailBcc: [],
  product:
    'Lục Trà truyền thống, Hồng Trà truyền thống, Trà trái cây, Trà sữa trân châu, Trà sữa trân châu đường đen, Cafe đen, Cafe Sữa, Espresso, Americano',
};

export const obj2 = {
  merchantId: '818144',
  appraisalState: 'NEW12',
  accountInfo: {
    id: '1282320603',
    username: 'huynhphan.envi@gmail.com',
    fullname: null,
    phone: null,
    email: 'huynhphan.envi@gmail.com',
    accountType: null,
    gender: null,
  },
  connectionTypeList: [],
  isActive: false,
  isShift: null,
  createdAt: '2022-07-26T15:21:06.228Z',
  approvedAt: '2022-07-27T02:29:23.478Z',
  updatedAt: '2022-08-04T07:27:11.518Z',
  state: 'APPROVED',
  authType: 'PASSWORD',
  withdrawVerifyType: 'PASSWORD',
  minBalance: 0,
  stores: null,
  contactInfo: {
    birthday: '1992-02-10T17:00:00.000Z',
    name: 'Huỳnh Phan',
    email: 'huynhphan.envi@gmail.com',
    phone: '84978303434',
    identifyNumber: '352199143',
    issuePlace: 'An Giang',
    position: 'Chủ doanh nghiệp',
    issueDate: '2009-04-16T17:00:00.000Z',
  },
  businessOverview: {
    type: 'INDIVIDUAL',
    category: '5812',
    categoryName: 'Dịch vụ ăn uống',
    abbreviationName: 'Huỳnh Phan',
    brandName: 'HUỲNH PHAN',
    description: '',
    maxRange: 'less100m',
    connectionType: 'OFFLINE',
    homeUrl: '',
    taxCode: null,
    address: '871 Hà Hoàng Hổ',
    province: 'Tỉnh An Giang',
    district: 'Thành phố Long Xuyên',
    wards: 'Phường 14',
    locationIdentifyCode: '27169',
    maxAmountTransaction: 2000000,
    logo: null,
    averageIncome: '50000000',
    totalRevenue: null,
    operatingStaff: null,
    companyAddress: {
      name: null,
      address: 'Đường 3 tháng 2, Phường 14, Quận 10',
      phoneNumber: '0978303434',
    },
    shareholders: [],
  },
  crossCheckInfo: {
    isOwner: null,
    isUseBank: null,
    isAllowCrossCheck: null,
    crossCheckNum: 1,
    type: 'AUTO',
  },
  paymentMethodExtend: [
    {
      method: 1,
      extraData: '{"isTransferNow":false21}',
    },
    {
      method: 2,
      extraData: '{"isTransferNow":false,"serviceCode":"WL1"}',
    },
    {
      method: 606,
      extraData: '{"isTransferNow":false,"type":"DEFAULT","supplier":null s}',
    },
    {
      method: 612,
      extraData:
        '{"isTransferNow":false,"isCapture":true,"is3DSecure":true,"mid":"4","type":"MANUAL","supplier":"SACOMBANK"}',
    },
    {
      method: 622,
      extraData: '{"isTransferNow":false}',
    },
    {
      method: 624,
      extraData: '{"isTransferNow":false}',
    },
  ],
  paymentMethod: [
    {
      referId: 1,
    },
    {
      referId: 2,
    },
    {
      referId: 606,
    },
    {
      referId: 612,
    },
    {
      referId: 622,
    },
    {
      referId: 624,
    },
  ],
  paymentMethodUse: [1, 2, 606, 612, 624],
  delegate: [
    {
      accountId: 1282320603,
      fullname: 'Huỳnh Phan',
      displayName: 'Huỳnh Phan',
      phone: null,
      email: 'huynhphan.envi@gmail.com',
      isActivePasswordTrading: false,
      passwordTrading: null,
      role: 'OWNER',
      tokenVerify: null,
      username: 'huynhphan.envi@gmail.com',
      isActive: true,
      state: 'APPROVED',
    },
  ],
  isSecurityPayout: false,
  notifyTelegram: {
    payout: null,
    payment: null,
  },
  currency: 'VND',
  operator: [],
  emailBcc: [],
  product:
    'Lục Trà truyền thống, Hồng Trà truyền thống, Trà trái cây, Trà sữa trân châu, Trà sữa trân châu đường đen, Cafe đen, Cafe Sữa, Espresso, Americano',
};
export const feeN = {
  data: {
    ecommerceFeeList: [
      {
        paymentMethodId: 1,
        paymentMethodName: 'Ví PayME',
        gatewayFee: {
          isDefault: false,
          value: 0,
        },
        fixedGatewayFee: {
          isDefault: false,
          value: 0,
        },
        transactionFee: {
          isDefault: false,
          value: 0.66,
        },
        fixedTransactionFee: {
          isDefault: false,
          value: 0,
        },
      },
      {
        paymentMethodId: 2,
        paymentMethodName: 'Thẻ ATM',
        gatewayFee: {
          isDefault: false,
          value: 0,
        },
        fixedGatewayFee: {
          isDefault: false,
          value: 0,
        },
        transactionFee: {
          isDefault: false,
          value: 1,
        },
        fixedTransactionFee: {
          isDefault: false,
          value: 2000,
        },
      },
      {
        paymentMethodId: 606,
        paymentMethodName: 'QR Pay',
        gatewayFee: {
          isDefault: false,
          value: 0,
        },
        fixedGatewayFee: {
          isDefault: false,
          value: 0,
        },
        transactionFee: {
          isDefault: false,
          value: 0.88,
        },
        fixedTransactionFee: {
          isDefault: false,
          value: 0,
        },
      },
      {
        paymentMethodId: 612,
        paymentMethodName: 'Thẻ quốc tế (VN)',
        gatewayFee: {
          isDefault: false,
          value: 0,
        },
        fixedGatewayFee: {
          isDefault: false,
          value: 0,
        },
        transactionFee: {
          isDefault: false,
          value: 2.5,
        },
        fixedTransactionFee: {
          isDefault: false,
          value: 2000,
        },
      },
      {
        paymentMethodId: 622,
        paymentMethodName: 'Tín Dụng PayME',
        gatewayFee: {
          isDefault: false,
          value: 0,
        },
        fixedGatewayFee: {
          isDefault: false,
          value: 0,
        },
        transactionFee: {
          isDefault: false,
          value: 0,
        },
        fixedTransactionFee: {
          isDefault: false,
          value: 0,
        },
      },
      {
        paymentMethodId: 624,
        paymentMethodName: 'FaceID',
        gatewayFee: {
          isDefault: false,
          value: 0,
        },
        fixedGatewayFee: {
          isDefault: false,
          value: 0,
        },
        transactionFee: {
          isDefault: false,
          value: 2,
        },
        fixedTransactionFee: {
          isDefault: false,
          value: 0,
        },
      },
    ],
    poboFeeList: [
      {
        paymentMethodId: 1,
        paymentMethodName: 'Ví PayME',
        gatewayFee: {
          isDefault: true,
          value: null,
        },

        fixedGatewayFee: {
          isDefault: true,
          value: null,
        },
        transactionFee: {
          isDefault: true,
          value: null,
        },
        fixedTransactionFee: {
          isDefault: true,
          value: null,
        },
      },
      {
        paymentMethodId: 2,
        paymentMethodName: 'Thẻ ATM',
        gatewayFee: {
          isDefault: true,
          value: null,
        },
        fixedGatewayFee: {
          isDefault: true,
          value: null,
        },
        transactionFee: {
          isDefault: true,
          value: null,
        },
        fixedTransactionFee: {
          isDefault: true,
          value: null,
        },
      },
    ],
  },
};
export const feeT = {
  data: {
    ecommerceFeeList: [
      {
        paymentMethodId: 1,
        paymentMethodName: 'Ví PayME',
        gatewayFee: {
          isDefault: false,
          value: 0,
        },
        fixedGatewayFee: {
          isDefault: false,
          value: 0,
        },
        transactionFee: {
          isDefault: false,
          value: 0.66,
        },
        fixedTransactionFee: {
          isDefault: false,
          value: 0,
        },
      },
      {
        paymentMethodId: 2,
        paymentMethodName: 'Thẻ ATM',
        gatewayFee: {
          isDefault: false,
          value: 0,
        },
        fixedGatewayFee: {
          isDefault: false,
          value: 0,
        },
        transactionFee: {
          isDefault: false,
          value: 1,
        },
        fixedTransactionFee: {
          isDefault: false,
          value: 2000,
        },
      },
      {
        paymentMethodId: 606,
        paymentMethodName: 'QR Pay',
        gatewayFee: {
          isDefault: false,
          value: 0,
        },
        fixedGatewayFee: {
          isDefault: false,
          value: 0,
        },
        transactionFee: {
          isDefault: false,
          value: 0.88,
        },
        fixedTransactionFee: {
          isDefault: false,
          value: 0,
        },
      },
      {
        paymentMethodId: 612,
        paymentMethodName: 'Thẻ quốc tế (VN)',
        gatewayFee: {
          isDefault: false,
          value: 0,
        },
        fixedGatewayFee: {
          isDefault: false,
          value: 0,
        },
        transactionFee: {
          isDefault: false,
          value: 2.5,
        },
        fixedTransactionFee: {
          isDefault: false,
          value: 2000,
        },
      },
      {
        paymentMethodId: 622,
        paymentMethodName: 'Tín Dụng PayME',
        gatewayFee: {
          isDefault: false,
          value: 0,
        },
        fixedGatewayFee: {
          isDefault: false,
          value: 0,
        },
        transactionFee: {
          isDefault: false,
          value: 0,
        },
        fixedTransactionFee: {
          isDefault: false,
          value: 0,
        },
      },
      {
        paymentMethodId: 624,
        paymentMethodName: 'FaceID',
        gatewayFee: {
          isDefault: false,
          value: 0,
        },
        fixedGatewayFee: {
          isDefault: false,
          value: 0,
        },
        transactionFee: {
          isDefault: false,

          value: 2,
        },
        fixedTransactionFee: {
          isDefault: false,
          value: 0,
        },
      },
    ],
    poboFeeList: [
      {
        paymentMethodId: 1,
        paymentMethodName: 'Ví PayME',
        gatewayFee: {
          isDefault: true,
          value: null,
        },
        fixedGatewayFee: {
          isDefault: true,
          value: null,
        },
        transactionFee: {
          isDefault: true,
          value: null,
        },
        fixedTransactionFee: {
          isDefault: true,
          value: null,
        },
      },
      {
        paymentMethodId: 2,
        paymentMethodName: 'Thẻ ATM',
        gatewayFee: {
          isDefault: true,
          value: null,
        },
        fixedGatewayFee: {
          isDefault: true,
          value: null,
        },
        transactionFee: {
          isDefault: true,
          value: null,
        },
        fixedTransactionFee: {
          isDefault: true,
          value: null,
        },
      },
    ],
  },
};

export const onnn = {
  merchantId: '828782',
  appraisalState: 'NEW',
  accountInfo: {
    id: '5783094654',
    username: 'durkiderto@vusra.com',
    fullname: null,
    phone: null,
    email: 'durkiderto@vusra.com',
    accountType: null,
    gender: null,
    obj: {
      thanh: '12',
      shareholders: [
        {
          fullname: 'NghĩaNH',
          identifyNumber: '345547887',
          title: 'test 1',
          capitalRatio: '100',
          nationality: 'India',
        },
        {
          fullname: 'NghĩaNH',
          identifyNumber: '345547887',
          title: 'test 1',
          capitalRatio: '100',
          nationality: 'India',
        },
        {
          fullname: 'NghĩaNH',
          identifyNumber: '345547887',
          title: 'test 1',
          capitalRatio: '100',
          nationality: 'India',
        },
        {
          fullname: 'NghĩaNH',
          identifyNumber: '3455478871',
          title: 'test 1',
          capitalRatio: '100',
          nationality: 'India',
        },
      ],
    },
  },
  connectionTypeList: [],
  isActive: true,
  isShift: null,

  shareholders: [
    {
      fullname: 'NghĩaNH',
      identifyNumber: '345547887',
      title: 'test 1',
      capitalRatio: '100',
      nationality: 'India',
    },
    {
      fullname: 'NghĩaNH',
      identifyNumber: '345547887',
      title: 'test 1',
      capitalRatio: '100',
      nationality: 'India',
    },
  ],
};
export const change = {
  merchantId: '828782',
  appraisalState: 'NEW',
  accountInfo: {
    id: '5783094654',
    username: 'durkiderto@vusra.com',
    fullname: null,
    phone: null,
    email: 'durkiderto@vusra.com',
    accountType: null,
    gender: null,
    obj: {
      thanh: '12',
      shareholders: [
        {
          fullname: 'NghĩaNH',
          identifyNumber: '345547887',
          title: 'test 1',
          capitalRatio: '100',
          nationality: 'India',
        },
        {
          fullname: 'NghĩaNH',
          identifyNumber: '345547887',
          title: 'test 1',
          capitalRatio: '100',
          nationality: 'India',
        },
        {
          fullname: 'NghĩaNH',
          identifyNumber: '345547887',
          title: 'test 1',
          capitalRatio: '100',
          nationality: 'India',
        },
        {
          fullname: 'NghĩaNH',
          identifyNumber: '3455478870',
          title: 'test 1',
          capitalRatio: '100',
          nationality: 'China',
        },
      ],
    },
  },
  connectionTypeList: [],
  isActive: true,
  isShift: null,

  shareholders: [
    {
      fullname: 'NghĩaNH',
      identifyNumber: '345547887',
      title: 'test 1',
      capitalRatio: '100',
      nationality: 'India',
    },
    {
      fullname: 'NghĩaNH',
      identifyNumber: '345547887',
      title: 'test 1',
      capitalRatio: '100',
      nationality: 'India',
    },
  ],
};

// function isObject1(object) {
//   return object != null && typeof object === 'object';
// }
