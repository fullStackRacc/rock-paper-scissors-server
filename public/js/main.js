let results

function getFetch(){
  fetch("/play")
  .then(res => res.json()) //parse response as JSON
  .then(data => {
      console.log(data)
      document.querySelector('#win').innerText = data.wins
      document.querySelector('#loss').innerText = data.losses
      document.querySelector('#tie').innerText = data.ties
  })
  .catch(err => {
      console.log(`error ${err}`)
  })
}
const buttons = document.querySelectorAll(".button")

Array.from(buttons).forEach(element => element.addEventListener('click', sendPlayerChoice))


function sendPlayerChoice(click) {
    fetch('/play', {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: click.currentTarget.id
      }),
    })
    .then(getFetch())
}