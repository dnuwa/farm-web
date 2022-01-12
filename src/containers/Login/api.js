// import { create } from 'apisauce';
import { stringify, getData, postUrlBuilder } from "lib/transforms";

// import { CONTENT_TYPES } from 'utils/stringify';

// const api = create({
//   baseURL: `${process.env.NEXT_PUBLIC_AUTH_API}/auth`,
//   timeout: 30000,
// });

// export const loginApi = () => ({ ...payload }) => {
//   return api.post('/login', { ...payload }, { headers: { 'Content-Type': CONTENT_TYPES.JSON } });
// };

export const loginApi = (api) => (token) => (payload) =>
  api.post(
    postUrlBuilder("login", false, false),
    ...stringify(payload, token)
  );



// axios({
    //   method: 'POST',
    //   url: `${process.env.NEXT_PUBLIC_AUTH_API}/auth/login`,
    //   data: {
    //     identity: formValues.email,
    //     password: formValues.password,
    //   },
    // })
    //   .then(res => console.log('res----', res))
    //   .catch(err => console.error('error----',err.response));
