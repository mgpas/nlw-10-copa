function createGame(player1, hour, group, player2) {
  return `
<li>
<img src="./assets/icon=${player1}.svg" alt="${player1}" />
<strong>${hour}</strong>
<img src="./assets/icon=${player2}.svg" alt="${player2}" />
</li>
<p class= "group">${group}</p>
`
}

function createCard(date, day, games) {
  return `
    <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
    `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo",
    createGame("qatar", "13:00", "Grupo A", "ecuador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "Grupo B", "iran") +
      createGame("senegal", "13:00", "Grupo A", "netherlands") +
      createGame("united states", "16:00", "Grupo B", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "Grupo C", "saudi arabia") +
      createGame("denmark", "10:00", "Grupo D", "tunisia") +
      createGame("mexico", "13:00", "Grupo C", "poland") +
      createGame("france", "16:00", "Grupo D", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "07:00", "Grupo F", "croatia") +
      createGame("germany", "10:00", "Grupo E", "japan") +
      createGame("spain", "13:00", "Grupo E", "costa rica") +
      createGame("belgium", "16:00", "Grupo F", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "Grupo G", "cameroon") +
      createGame("uruguay", "10:00", "Grupo H", "south korea") +
      createGame("portugal", "13:00", "Grupo H", "ghana") +
      createGame("brazil", "16:00", "Grupo G", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "07:00", "Grupo B", "iran") +
      createGame("qatar", "10:00", "Grupo A", "senegal") +
      createGame("netherlands", "13:00", "Grupo A", "ecuador") +
      createGame("england", "16:00", "Grupo B", "united states")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "Grupo D", "australia") +
      createGame("poland", "10:00", "Grupo C", "saudi arabia") +
      createGame("france", "13:00", "Grupo D", "denmark") +
      createGame("argentina", "16:00", "Grupo C", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "07:00", "Grupo E", "costa rica") +
      createGame("belgium", "10:00", "Grupo F", "morocco") +
      createGame("croatia", "13:00", "Grupo F", "canada") +
      createGame("spain", "16:00", "Grupo E", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "Grupo G", "serbia") +
      createGame("south korea", "10:00", "Grupo H", "ghana") +
      createGame("brazil", "13:00", "Grupo G", "denmark") +
      createGame("portugal", "16:00", "Grupo H", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "07:00", "Grupo A", "senegal") +
      createGame("netherlands", "10:00", "Grupo A", "qatar") +
      createGame("iran", "13:00", "Grupo B", "united states") +
      createGame("wales", "16:00", "Grupo B", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "07:00", "Grupo D", "france") +
      createGame("australia", "10:00", "Grupo D", "denmark") +
      createGame("poland", "13:00", "Grupo C", "argentina") +
      createGame("saudi arabia", "16:00", "Grupo C", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "07:00", "Grupo F", "belgium") +
      createGame("canada", "10:00", "Grupo F", "morocco") +
      createGame("japan", "13:00", "Grupo E", "spain") +
      createGame("costa rica", "16:00", "Grupo E", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("south korea", "07:00", "Grupo H", "portugal") +
      createGame("ghana", "10:00", "Grupo H", "uruguay") +
      createGame("serbia", "13:00", "Grupo G", "switzerland") +
      createGame("cameroon", "16:00", "Grupo G", "brazil")
  ) +
  createCard(
    "03/12",
    "sábado",
    createGame("undefined", "12:00", "Oitavas de Final", "undefined") +
      createGame("undefined", "16:00", "Oitavas de Final", "undefined")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("undefined", "12:00", "Oitavas de Final", "undefined") +
      createGame("undefined", "16:00", "Oitavas de Final", "undefined")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("undefined", "12:00", "Oitavas de Final", "undefined") +
      createGame("undefined", "16:00", "Oitavas de Final", "undefined")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("undefined", "12:00", "Oitavas de Final", "undefined") +
      createGame("undefined", "16:00", "Oitavas de Final", "undefined")
  ) +
  createCard(
    "09/12",
    "sexta",
    createGame("undefined", "12:00", "Quartas de Final", "undefined") +
      createGame("undefined", "16:00", "Quartas de Final", "undefined")
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame("undefined", "12:00", "Quartas de Final", "undefined") +
      createGame("undefined", "16:00", "Quartas de Final", "undefined")
  ) +
  createCard(
    "13/12",
    "terça",
    createGame("undefined", "16:00", "Semifinais", "undefined")
  ) +
  createCard(
    "14/12",
    "quarta",
    createGame("undefined", "16:00", "Semifinais", "undefined")
  ) +
  createCard(
    "17/12",
    "sábado",
    createGame("undefined", "12:00", "Terceiro lugar", "undefined")
  ) +
  createCard(
    "18/12",
    "domingo",
    createGame("undefined", "12:00", "Final", "undefined")
  )
