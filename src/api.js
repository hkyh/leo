export function buildApiClient(url = 'http://localhost:3000/game/') {
  return {
    getState() {
      return fetch(`${url}state`).then(r => r.json())
    },
    requestPlayer(id) {
      return fetch(`${url}requestPlayer`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: `{
  "playerType": "player${['', 'A', 'B'][id]}"
}`
      }).then(r => r.json())
    },
    movePlayer() {
      return fetch(`${url}movePlayer`, {method: 'POST'}).then(r => r.json())
    }
  }
}

export default buildApiClient
