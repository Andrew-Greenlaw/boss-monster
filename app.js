const players = [
  {
    name: 'Slate Slabrock',
    type: 'dwarf',
    damage: 5,
    health: 100,
    isAlive: true,
    gold: 0
  },
  {
    name: 'Flint Ironstag',
    type: 'elf',
    damage: 10,
    health: 50,
    isAlive: true,
    gold: 0
  }
]

const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}

function damageToBoss() {
  players.forEach(p => {
    if (p.isAlive = false) {
      return
    } else {
      boss.health -= p.damage
    }
  })

  updateBoss()
}

function giveGold() {
  let gold = 0
  players.forEach(p => {
    p.gold += 100
  })
  updatePlayer()
}

function updateBoss() {
  if (boss.health <= 0) {
    giveGold()
    boss.level++
    boss.health = boss.maxHealth + 100
    boss.maxHealth = boss.health
  }
  // console.log(boss.health);
  // console.log(boss.maxHealth)
  let monster = document.getElementById('boss')
  // @ts-ignore
  let bossHealth = monster.querySelector(`.health`)
  // @ts-ignore
  bossHealth.innerText = `HEALTH: ${boss.health} LEVEL: ${boss.level}`
}

function damageToPlayer() {
  players.forEach(player => {
    player.health -= boss.damage
    if (player.health <= 0) {
      player.health = 0
    }
  })
  updatePlayer()
}


function healthPotion(type) {
  let player = players.find(p => p.type == type)

  // @ts-ignore
  if (player.gold >= 50) {
    // @ts-ignore
    player.health += 5
    // @ts-ignore
    player.gold -= 50
    updatePlayer()
  }

}

function updatePlayer() {
  players.forEach(p => {
    if (p.health > 0) {
      p.isAlive = true
    } else {
      p.isAlive = false
    }
    let player = document.getElementById(`${p.name}`)
    // @ts-ignore
    let healthbar = player.querySelector('.health-bar')
    let goldAmount = player?.querySelector(`.gold`)
    // @ts-ignore
    healthbar.innerText = `Health: ${p.health}`
    // @ts-ignore
    goldAmount.innerText = `Gold: ${p.gold}`
    // console.log(healthbar);
  })
}
updatePlayer()
setInterval(damageToPlayer, 5000)
updateBoss()
