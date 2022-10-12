import specialAttack from '../destructuring';


test('should sum', () => {
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
    const toBe = [{id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно'}];
    
    const result = specialAttack(character,9);
  
    expect(result).toBe(toBe);
  });