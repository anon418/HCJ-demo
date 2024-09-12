document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}

function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}

function yellow() {
  document.body.style.backgroundColor = 'yellow'
}

function gray() {
  document.body.style.backgroundColor = 'gray'
}

function reset() {
  document.body.style.backgroundColor = 'white'
}

function showhtml() {
  document.getElementById('fig').src = 'img/html5.jpg'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.'
}

function showcss() {
  document.getElementById('fig').src = 'img/css3.jpg'
  document.getElementById('desc').innerHTML =
    '<b>CSS</b>은 HTML 문서의 스타일을 지정하기 위한 언어이다.'
}

function showJavascript() {
  document.getElementById('fig').src = 'img/javascript.jpg'
  document.getElementById('desc').innerHTML = ''
}
