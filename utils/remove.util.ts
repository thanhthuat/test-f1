export const removeFalsyValue = (object: any) => {
  for (const key in object) {
    if (Array.isArray(object[key])) {
      if (!object[key].length) delete object[key];
    } else {
      if (!object[key]) {
        delete object[key];
      }
    }
  }
  return object;
};
