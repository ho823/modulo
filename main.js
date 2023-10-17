window.onload = (event) => {
  const play = document.getElementById('play');
  const reset = document.getElementById('reset');
  let counter = 0;

  play.addEventListener('click', (event) => {
    console.log('click', event.target)
  })

  reset.addEventListener('click', (event) => {
    console.log('reset', event.target)
  })

}

