export default function specialAttack(obj,id){
  let i = new Array;
    for (let item in obj.special){
      if (obj.special[item].id == id){
        const {id="0", name="Двойной выстрел", icon='http://...', description= 'Описание недоступно'} = obj.special[item]
        i.push ({
          id,
          name,
          icon,
          description
        })
      }
    }
    return i;
}

//const character = {
  //  name: 'Лучник',
    //type: 'Bowman',
   // health: 50,
   // level: 3,
   // attack: 40,
   // defence: 10,
   // special: [
     // {
       // id: 8,
       // name: 'Двойной выстрел',
       // icon: 'http://...',
       // description: 'Двойной выстрел наносит двойной урон'
      //}, 
      //{
       // id: 9,
       // name: 'Нокаутирующий удар',
       // icon: 'http://...',
     // }
    //]	
 // }

//const l = specialAttack(character,9)

//for (let i in l){
//  console.log(l[i])
//}



