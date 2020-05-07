export default url => {
  const [ , id, ] = url.match(/\/([0-9]{1,})\//)

  return id
}