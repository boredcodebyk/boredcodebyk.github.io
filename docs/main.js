console.log("Hello, I'm bored!")
const randomTextArr = ["I'm bored", "there are a lot of free stuffs available for developers? here's a <a href='https://github.com/ripienaar/free-for-dev'>list</a>"]
const randomText = document.querySelector('#random')

function showRandom() {
  randomText.innerHTML = `did you know? ${randomTextArr[Math.floor(Math.random() * randomTextArr.length)]}`
}
window.onload = showRandom
