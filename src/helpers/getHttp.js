export const getHttp = async (url, options = {}) => {
  const defaultHeaders = {
    accept: "aplication/json",
  };

  const controller = new AbortController();
  options.signal = controller.signal;

  options.method = "GET";
  options.headers = options.headers
    ? { ...defaultHeaders, ...options.headers }
    : defaultHeaders;

  options.body = JSON.stringify(options.body) || false;
  if (!options.body) delete options.body;

  setTimeout(() => controller.abort(), 3000);

  return await fetch(url, options)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "Ocurrio un error",
          })
    )
    .catch((err) => err);
};
