export default (context, inject) => {
  const hello = (msg) => console.log(`Hello ${msg}!`)
  inject('hello', hello)
  console.log(context)
}
