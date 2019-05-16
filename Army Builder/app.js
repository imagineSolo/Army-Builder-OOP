class Unit {
  constructor(name, type, value, img) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.img = img;
  }
  addUnit() {
    const army = document.querySelector('.new-army');
    const reinforcement = document.createElement('div');
    reinforcement.classList.add('unit');
    reinforcement.innerHTML = `<img src=${this.img}>`;
    reinforcement.id = `${this.type}`;
    army.appendChild(reinforcement);

  }
}

document.addEventListener('DOMContentLoaded', () => {
  const general = new Unit('General', 'general', 10, 'img/general.jpg');
  general.addUnit();
})

document.getElementById('knights').addEventListener('click', (e) => {
  const knights = new Unit('Knights', 'knights', 5, 'img/knights.jpg');
  knights.addUnit();
  e.preventDefault();
  console.log(knights);
})
document.getElementById('light-cavalry').addEventListener('click', (e) => {
  const lightCavalry = new Unit('Light Cavalry', 'light-cavalry', 3, 'img/light-cavalry.jpg');
  lightCavalry.addUnit();
  e.preventDefault();
})
document.getElementById('heavy-infantry').addEventListener('click', (e) => {
  const heavyInfantry = new Unit('Heavy Infantry', 'heavy-infantry', 4, 'img/heavy-infantry.jpg');
  heavyInfantry.addUnit();
  e.preventDefault();
})
document.getElementById('light-infantry').addEventListener('click', (e) => {
  const lightInfantry = new Unit('Light Infantry', 'light-infantry', 1, 'img/light-infantry.jpg');
  lightInfantry.addUnit();
  e.preventDefault();
})
document.getElementById('bowmen').addEventListener('click', (e) => {
  const bowmen = new Unit('Bowmen', 'bowmen', 1, 'img/bowmen.jpg');
  bowmen.addUnit();
  e.preventDefault();
})
document.getElementById('peasant-bowmen').addEventListener('click', (e) => {
  const peasantBowmen = new Unit('Peasant Bowmen', 'peasant-bowmen', 1, 'img/peasant-bowmen.jpg');
  peasantBowmen.addUnit();
  e.preventDefault();
})
document.getElementById('catapult').addEventListener('click', (e) => {
  const catapult = new Unit('Catapult', 'catapult', 4, 'img/catapult.jpg');
  catapult.addUnit();
  e.preventDefault();
})
document.getElementById('trebuchet').addEventListener('click', (e) => {
  const trebuchet = new Unit('Trebuchet', 'trebuchet', 5, 'img/trebuchet.jpg');
  trebuchet.addUnit();
  e.preventDefault();
})