// function play(click) {
//   console.log("LET IT BE WAR");
//   getFetch();
// }
let results

function getFetch(){
  fetch("/play")
  .then(res => res.json()) //parse response as JSON
  .then(data => {
      console.log(data)
  })
  .catch(err => {
      console.log(`error ${err}`)
  })
  // try {
  //   console.log('in get fetch')
  //   const res = await fetch(`/play`)
  //   console.log('in between fetch and res')
  //   const data = await res.json()
  //   console.log('after res')
  //   console.log(data)
  //   document.querySelector('#win').innerText = data.wins
  //   document.querySelector('#loss').innerText = data.losses
  //   document.querySelector('#tie').innerText = data.ties
  // } catch (e) {
  //   console.log(e)
  // }
}

// document.querySelectorAll(".button").addEventListener('click', getFetch)

const buttons = document.querySelectorAll(".button")

Array.from(buttons).forEach(element => element.addEventListener('click', sendPlayerChoice))


async function sendPlayerChoice(click) {
  try {
    fetch('/play', {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: click.currentTarget.id
      }),
    })
    console.log("sendPlayerChoice")
  } catch (e) {
    console.log(e)
  }
  console.log('get fetch')
  getFetch();
}
// document.querySelector("#play").addEventListener("click", play); 