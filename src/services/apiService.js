import { create } from "apisauce";
// let { pathname, host, protocol } = window.location;
// let baseUrl = encodeURI(`${protocol}//${host}`);

export default create({
  baseURL: `${process.env.NEXT_PUBLIC_AUTH_API}/auth`,
    // process.env.NODE_ENV === "development"
    //   ? `${process.env.NEXT_PUBLIC_AUTH_API}/auth`
    //   : `${baseUrl}/famunera`,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate",
    "Keep-Alive": "timeout=5000000, max=1000",
    // ...(process.env.NODE_ENV === "development" ? { User: "SURE" } : {}),
  },
});
