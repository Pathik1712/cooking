const cookie = (name) => {
  let list = document.cookie.split(";")
  for (let i = 0; i < list.length; i++) {
    if (list[i].includes(`${name}=`)) {
      let temp = list[i].split(`${name}=`)
      return temp[1]
    }
  }
}
export default cookie
