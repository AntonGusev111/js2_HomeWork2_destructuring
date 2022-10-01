export default function specialAttack(obj){
    let returnArray = [];
    for (let item in obj.special){
        if(!obj.special[item]['description']){
            obj.special[item]['description'] = 'Описание недоступно';
        }
        returnArray.push(obj.special[item])
    }
    return returnArray

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
        description:'',
      }
    ]	
  }

//const result = specialAttack(character)

//for (let i in result){
  //  console.log(result[i])
//}