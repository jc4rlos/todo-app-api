export const promisseHandler = (promise) => {
  return promise.then((data) => [null, data]).catch((err) => [err])
}
