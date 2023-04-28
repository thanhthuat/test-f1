export class GeneralUtil {
  static enumToList(myEnum: any): Array<any> {
    const myList = [];
    for (const key in myEnum) {
      myList.push({ name: myEnum[key], value: key, label: myEnum[key] });
    }
    return myList;
  }

  static enumToListHTML(myEnum: any, defaultKey: string, defaultValue = '') {
    return [
      {
        name: defaultKey,
        value: defaultValue,
        label: defaultKey,
      },
      ...GeneralUtil.enumToList(myEnum),
    ];
  }

  static isObject(value: any) {
    return !value || Object.keys(value).length === 0;
  }

  static toMoney(amount: number, currency = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }

  static toDecimal(amount: number, locale = 'en-US') {
    return Number(
      new Intl.NumberFormat(locale, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }).format(amount)
    );
  }

  static isEmptyObj(obj: any) {
    let count = 0;
    for (const key in obj) {
      if (obj[key]?.toString()?.trim()?.length > 0) count += 1;
    }

    return count > 0;
  }

  static removeValueNullObj(obj: any) {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === null || obj[key] === '') {
        delete obj[key];
      }
    });
    return obj;
  }

  /**
   * @TODO: make this into a recursive method to resole all nested level
   * Currently this only works 2 nested levels
   * @param object
   */
  static nestedObjectToFormData(object: any) {
    const formData = new FormData();
    if (!object) {
      return formData;
    }

    Object.keys(object).forEach((key) => {
      this.appendObjectToFormData(object[key], formData, key);
    });

    return formData;
  }

  static appendObjectToFormData(
    object: any,
    formData: FormData,
    suffix: string
  ) {
    if (object) {
      if (Array.isArray(object)) {
        for (let i = 0; i < object.length; i++) {
          this.appendObjectToFormData(object[i], formData, `${suffix}[${i}]`);
        }
      } else {
        Object.keys(object).forEach((key) => {
          if (Array.isArray(object[key])) {
            for (let j = 0; j < object[key].length; j++) {
              this.appendObjectToFormData(
                object[key][j],
                formData,
                `${suffix}[${key}][${j}]`
              );
            }
          } else {
            // @TODO: nested object
            formData.append(`${suffix}[${key}]`, object[key]);
          }
        });
      }
    }

    return formData;
  }

  static simpleObjectToFormData(object: any) {
    const formData = new FormData();

    if (!object) {
      return formData;
    }

    Object.keys(object).forEach((key) => {
      if (Array.isArray(object[key])) {
        for (let j = 0; j < object[key].length; j++) {
          formData.append(`${key}[${j}]`, object[key][j]);
        }
      } else {
        // @TODO: nested object
        formData.append(`${key}`, object[key]);
      }
    });
    return formData;
  }
}
