 function specialAttack(obj,id){
    for (let item in obj.special){
      if (obj.special[item].id == id){
        return  [id = 0, name = 'name', icon = 'icon', description = 'Описание недоступно'] = [obj.special[item].id, obj.special[item].name, obj.special[item].icon, obj.special[item].description]
      }
    }
}

const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        
      }
    ]	
  }

let result = specialAttack(character,8);

for (let i in result){
    console.log(result[i])
}

//export default
