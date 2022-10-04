 function specialAttack(obj,id){
    for (let item in obj.special){
      if (obj.special[item].id == id){
        return {id="0", name="Двойной выстрел", icon='http://...', description= 'Двойной'} = obj.special[item]
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

console.log(specialAttack(character,9));



//export default {
//          id=0, 
  //        name='name', 
    //      icon='http', 
      //    description='description',
       // }
