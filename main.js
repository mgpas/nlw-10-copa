function createGame(player1, player1Name, hour, group, player2, player2Name) {
  return `
<li class= "game">
<img src="./assets/icon=${player1}.svg" alt="${player1}" />
<strong>${hour}</strong>
<img src="./assets/icon=${player2}.svg" alt="${player2}" />
</li>
<li class= "names">
<p class= "player1" >${player1Name}</p>
<p class= "player2">${player2Name}</p>
</li>
<li class= "group">
<h1>${group}</h1>
</li>
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
    createGame("qatar", "Catar", "13:00", "Grupo A", "ecuador", "Equador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "Inglaterra", "10:00", "Grupo B", "iran", "Irã") +
      createGame("senegal", "Senegal", "13:00", "Grupo A", "netherlands", "Holanda") +
      createGame("united states", "EUA", "16:00", "Grupo B", "wales", "Gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "Argentina", "07:00", "Grupo C", "saudi arabia", "Arábia Saudita") +
      createGame("denmark", "Dinamarca", "10:00", "Grupo D", "tunisia", "Tunísia") +
      createGame("mexico", "México", "13:00", "Grupo C", "poland", "Polônia") +
      createGame("france", "França", "16:00", "Grupo D", "australia", "Austrália")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "Marrocos", "07:00", "Grupo F", "croatia", "Croácia") +
      createGame("germany", "Alemanha", "10:00", "Grupo E", "japan", "Japão") +
      createGame("spain", "Espanha", "13:00", "Grupo E", "costa rica", "Costa Rica") +
      createGame("belgium", "Bélgica", "16:00", "Grupo F", "canada", "Canadá")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "Suíça", "07:00", "Grupo G", "cameroon", "Camarões") +
      createGame("uruguay", "Uruguai", "10:00", "Grupo H", "south korea", "Coreia do Sul") +
      createGame("portugal", "Portugal", "13:00", "Grupo H", "ghana", "Gana") +
      createGame("brazil", "Brasil", "16:00", "Grupo G", "serbia", "Sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "Gales", "07:00", "Grupo B", "iran", "Irã") +
      createGame("qatar", "Catar", "10:00", "Grupo A", "senegal", "Senegal") +
      createGame("netherlands", "Holanda", "13:00", "Grupo A", "ecuador", "Equador") +
      createGame("england", "Inglaterra", "16:00", "Grupo B", "united states", "USA")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "Tunísia", "07:00", "Grupo D", "australia", "Austrália") +
      createGame("poland", "Polônia", "10:00", "Grupo C", "saudi arabia", "Arábia Saudita") +
      createGame("france", "França", "13:00", "Grupo D", "denmark", "Dinamarca") +
      createGame("argentina", "Argentina", "16:00", "Grupo C", "mexico", "México")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "Japão", "07:00", "Grupo E", "costa rica", "Costa Rica") +
      createGame("belgium", "Bélgica", "10:00", "Grupo F", "morocco", "Marrocos") +
      createGame("croatia", "Croácia", "13:00", "Grupo F", "canada", "Canadá") +
      createGame("spain", "Espanha", "16:00", "Grupo E", "germany", "Alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "Camarões", "07:00", "Grupo G", "serbia", "Sérvia") +
      createGame("south korea", "Coreia do Sul", "10:00", "Grupo H", "ghana", "Gana") +
      createGame("brazil", "Brasil", "13:00", "Grupo G", "switzerland", "Suíça") +
      createGame("portugal", "Portugal", "16:00", "Grupo H", "uruguay", "Uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "Equador", "12:00", "Grupo A", "senegal", "Senegal") +
      createGame("netherlands", "Holanda", "12:00", "Grupo A", "qatar", "Catar") +
      createGame("iran", "Irã", "16:00", "Grupo B", "united states", "USA") +
      createGame("wales", "Gales", "16:00", "Grupo B", "england", "Inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "Tunísia", "12:00", "Grupo D", "france", "França") +
      createGame("australia", "Austrália", "12:00", "Grupo D", "denmark", "Dinamarca") +
      createGame("poland", "Polônia", "16:00", "Grupo C", "argentina", "Argentina") +
      createGame("saudi arabia", "Arábia Saudita", "16:00", "Grupo C", "mexico", "México")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "Croácia", "12:00", "Grupo F", "belgium", "Bélgica") +
      createGame("canada", "Canadá", "12:00", "Grupo F", "morocco", "Marrocos") +
      createGame("japan", "Japão", "16:00", "Grupo E", "spain", "Espanha") +
      createGame("costa rica", "Costa Rica", "16:00", "Grupo E", "germany", "Alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("south korea", "Coreia do Sul", "12:00", "Grupo H", "portugal", "Portugal") +
      createGame("ghana", "Gana", "12:00", "Grupo H", "uruguay", "Uruguai") +
      createGame("serbia", "Sérvia", "16:00", "Grupo G", "switzerland", "Suíça") +
      createGame("cameroon", "Camarões", "16:00", "Grupo G", "brazil", "Brasil")
  ) +
  createCard(
    "03/12",
    "sábado",
    createGame("undefined", "1º A", "12:00", "Oitavas 1", "undefined", "2º B") +
      createGame("undefined", "1º C", "16:00", "Oitavas 2", "undefined", "2º D")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("undefined", "1º B", "12:00", "Oitavas 5", "undefined", "2º A") +
      createGame("undefined", "1º D", "16:00", "Oitavas 6", "undefined", "2º C")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("undefined", "1º E", "12:00", "Oitavas 3", "undefined", "2º F") +
      createGame("undefined", "1º G", "16:00", "Oitavas 4", "undefined", "2º H")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("undefined", "1º F", "12:00", "Oitavas 7", "undefined", "2º E") +
      createGame("undefined", "1º H", "16:00", "Oitavas 8", "undefined", "2º G")
  ) +
  createCard(
    "09/12",
    "sexta",
    createGame("undefined", "Venc. Oitavas 1", "12:00", "Quartas 1", "undefined", "Venc. Oitavas 2") +
      createGame("undefined", "Venc. Oitavas 3", "12:00", "Quartas 2", "undefined", "Venc. Oitavas 4")
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame("undefined", "Venc. Oitavas 5", "12:00", "Quartas 3", "undefined", "Venc. Oitavas 6") +
      createGame("undefined", "Venc. Oitavas 7", "12:00", "Quartas 4", "undefined", "Venc. Oitavas 8")
  ) +
  createCard(
    "13/12",
    "terça",
    createGame("undefined", "Venc. Quartas 1", "16:00", "Semifinal 1", "undefined", "Venc. Quartas 2")
  ) +
  createCard(
    "14/12",
    "quarta",
    createGame("undefined", "Venc. Quartas 3", "16:00", "Semifinal 2", "undefined", "Venc. Quartas 4")
  ) +
  createCard(
    "17/12",
    "sábado",
    createGame("undefined", "Perd. Semifinal 1", "16:00", "Disputa 3º", "undefined", "Perd. Semifinal 2")
  ) +
  createCard(
    "18/12",
    "domingo",
    createGame("undefined", "Venc. Semifinal 1", "16:00", "Final", "undefined", "Venc. Semifinal 2")
  )
