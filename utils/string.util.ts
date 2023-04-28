export class StringUtil {
  static checkEmail(email: string) {
    if (email) {
      const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
      if (reg.test(email)) return true;
      else {
        return 'Invalid email format';
      }
    } else {
      return true;
    }
  }

  static checkPhoneNumber(phone: string) {
    if (phone) {
      const reg = /^\+1[0-9]{10}$/g;
      if (reg.test(phone)) return true;
      else {
        return 'Invalid phone number format (ex:+12345678901)';
      }
    } else {
      return true;
    }
  }

  static getFirstCharacterName(name: string) {
    if (name) {
      const arr = name.split(' ');
      return arr[arr.length - 1][0];
    }
    return '';
  }

  static clampString(text: string, length: number) {
    return text.length > length ? text.substring(0, length - 3) + '...' : text;
  }

  static checkPassword(password: string) {
    const err = [];
    if (password?.length < 8) {
      return 'Password min length 8 character';
    }

    if (!/[a-z]/g.test(password)) {
      err.push('1 lower case letter');
    }
    if (!/[A-Z]/g.test(password)) {
      err.push('1 upper case letter');
    }
    if (!/\d/g.test(password)) {
      err.push('1 number');
    }
    if (!/[!@#$%^&*\-+(),.?":{}|<>]/g.test(password)) {
      err.push('1 special character');
    }

    if (err.length > 0) {
      return 'Password must contain at least ' + err.join(', ');
    }

    return true;
  }

  static checkErrorPasswordTooltip(password: string | undefined) {
    const errObj = {
      minLength: true,
      isHasNumber: true,
      isHasLowercaseAndUppercase: true,
      isHasSpecialCharacter: true,
    };
    if (!password) {
      return errObj;
    }

    if (password?.length >= 8) {
      errObj.minLength = false;
    }

    if (/\d/g.test(password)) {
      errObj.isHasNumber = false;
    }

    if (/[A-Z]/g.test(password) && /[a-z]/g.test(password)) {
      errObj.isHasLowercaseAndUppercase = false;
    }

    if (/[!@#$%^&*\-+(),.?":{}|<>]/g.test(password)) {
      errObj.isHasSpecialCharacter = false;
    }

    return errObj;
  }

  static checkValidUrl(url: string) {
    if (url) {
      const reg =
        // eslint-disable-next-line no-useless-escape
        /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&amp;=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&amp;=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&amp;;%@.\w_]*)#?(?:[\w]*))?)/;

      if (reg.test(url)) return true;
      else {
        return 'Invalid url format';
      }
    } else {
      return true;
    }
  }

  static base64ToBlob(base64: string, type = 'application/octet-stream') {
    const binStr = atob(base64);
    const len = binStr.length;
    const arr = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      arr[i] = binStr.charCodeAt(i);
    }
    return new Blob([arr], { type: type });
  }
}
