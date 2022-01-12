import { stringify } from 'qs';

export const CONTENT_TYPES = {
  JSON: 'application/json',
  FORM: 'application/x-www-form-urlencoded',
  MULTIPART: 'multipart/form-data',
};

export default (data, token = false, headers = false, cType = CONTENT_TYPES.JSON, pass) => {
  if (token) {
    return [
      cType === CONTENT_TYPES.FORM ? stringify(data) : data,
      {
        headers: {
          ...(cType ? { 'Content-Type': cType } : {}),
          Authorization: `Bearer ${token}`,
          ...headers,
        },
        ...pass,
      },
    ];
  } else {
    return [
      cType === CONTENT_TYPES.FORM ? stringify(data) : data,
      {
        headers: { ...(cType ? { 'Content-Type': cType } : {}), ...headers },
        ...pass,
      },
    ];
  }
};

export const getData = (data = false, token = false, headers = false, pass) => {
  if (token && data) {
    return [
      data,
      {
        headers: { Authorization: `Bearer ${token}`, ...headers },
        ...pass,
      },
    ];
  } else if (token && !data) {
    return [
      null,
      {
        headers: { Authorization: `Bearer ${token}`, ...headers },
        ...pass,
      },
    ];
  } else {
    return [
      data,
      {
        headers: { ...headers },
        ...pass,
      },
    ];
  }
};
