export default (url, option = false, projection = false, other = false) =>
  `${url}${!!option || !!projection || !!other ? "?" : ""}${
    !!option ? `option=${option}` : ""
  }${!!projection ? `&projection=${projection}` : ""}${
    !!other
      ? '&' + (() =>
          Object.keys(other)
            .map(key => (~other[key] ? `key=${other[key]}` : ""))
            .join("&"))()
      : ""
  }`
