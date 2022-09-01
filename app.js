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
  let damage = 0

  players.forEach(p => {
    if (p.isAlive = false) {
      return
    } else {
      damage += p.damage
    }

  })

  boss.health -= damage

  updateBoss()
}

function giveGold() {
  let gold = 0

  players.forEach(p => {
    p.gold += 20

  })


  updatePlayer()
}

function updateBoss() {
  if (boss.health <= 0) {
    giveGold()
    boss.level++
    boss.health = boss.maxHealth + 200
    boss.maxHealth = boss.health
    boss.damage * 1.5
  }

  console.log(boss.health);
  console.log(boss.maxHealth)

  let monster = document.getElementById('boss')
  // @ts-ignore
  let bossHealth = monster.querySelector(`.health`)
  // @ts-ignore
  bossHealth.innerText = `HEALTH: ${boss.health} LEVEL: ${boss.level}`
}

function damageToPlayer() {
  let bossDamage = boss.damage
  players.forEach(player => {
    player.health -= bossDamage
    if (player.health <= 0) {
      player.health = 0
    }
  })

  updatePlayer()
}

// function upgradeB()

function smallHealthPotion() {
  players.forEach(p => {
    p.health += 20
  });
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

    if (p.gold < 20) {
      p.gold -= 5
      smallHealthPotion()
    }

    console.log(healthbar);
  })


}
setInterval(damageToPlayer, 5000)
updateBoss()
