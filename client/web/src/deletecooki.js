const dcooki = (n) => {
  document.cookie = `${n}=;expires=${new Date(24 * 60 * 60 * 1000)}`
}
export default dcooki
