
const {me, users} = require('./var');
const {sorter} = require('./task2');
const {theBig} = require('./task3');
const {mixer} = require('./task4');
const {calendar} = require('./task5');
const {sortClass} = require('./task6');




// Task 1

let mas = "Жили були дід і баба";
let newMas = mas.split(' ');


console.log(newMas);

// Task 2

sorter(me);

// Task 3

theBig(26, 39);

// Task 4

mixer([5, -12, -12, 9, 10, 0, -9, -12, -1, 23, 65, 64, 11, 43, 39, -15]);

// Task 5

calendar(2, 2004);

// Task 6

console.log(sortClass(users));

// Task 7

class Port {
    constructor(number, name, marina) {
        this.number = number;
        this.name = name;
        this.marina = marina;
    }
}

class Ship {
    constructor(number, name, marina) {
        this.number = number;
        this.name = name;
        this.marina = marina;
    }

    info() {
        console.log(this)
    }
}

class marina {

    constructor(number, shipNumber, timeArrival, timeDeparture) {
        this.number = number;
        this.shipNumber = shipNumber;
        this.timeArrival = timeArrival;
        this.timeDeparture = timeDeparture;
    }
}



let newShip = new Port(Math.round(Math.random()*44), "NewPort", undefined);

let marinas = [
    new marina(1, 999, new Date(2020, 2, 30), undefined),
        new marina(2, 777, new Date(2019, 12, 30), new Date(2020, 3, 17)),
        new marina(3, 666, new Date(2019, 8, 3), new Date(2019, 10, 28)),
        new marina(4, 228, new Date(2019, 4, 18), new Date(2019, 8, 14)),
        new marina(5, 69, new Date(2018, 6, 11), new Date(2019, 3, 3))];

let ships = [new Ship(228, "Путейн", 2), new Ship(666, "DeViL", 4),
    new Ship(420, "Cannabis", undefined), new Ship(69, "love", 1),
    new Ship(999, "Infinity", 3), new Ship(777, "Три Топора", 5),
    new Ship(555, "FiveFiveFive", 3), new Ship(444, "FourFourFour", 3)];

let ports = [new Port(1, 'Port1', 5), new Port(2, 'Port2', 4),
    new Port(3, 'Port3', 3), new Port(4, 'Port4', 2),
    new Port(5, 'Port5', 1),new Port(6, 'Б.О.М.Ж.', undefined)];

//доданя ноового порту
console.log('\nдоданя ноового порту\n');

console.log(ports);
ports.push(newShip);
console.log(ports);

//видалення першого порту
console.log('\nвидалення першого порту\n');
console.log(ports);
ports.shift();
console.log(ports);

//знаходження конкретного порту
console.log('\nзнаходження конкретного порту\n');
let findPort = ports.find(value => {
    return value.name = 'NewPort'
});
console.log(findPort);

//доданя ноового корабля
console.log('\nдоданя ноового корабля\n');

console.log(ships);
ships.push(new Ship(Math.round(Math.random()*999), "NewPlayer", undefined));
console.log(ships);

//видаленя рандомного корабля
console.log('\nвидаленя рандомного корабля\n');

console.log(ships);
ships.splice(Math.floor(Math.random()*ships.length),1);
console.log(ships);

//знаходження конкретного корабля
console.log('\nзнаходження конкретного корабля\n');

let findShip = ships.find(value => {
    return value.name = 'NewPlayer'
});
console.log(findShip);

//Додавання пристані до порту
console.log('\nДодавання пристані до порту\n');


let withoutMarina = ports.find(value => {
    return value.marina === undefined
});
console.log(ports);

withoutMarina.marina = marinas[Math.round(Math.random()*marinas.length-1)].number;

console.log(ports);

//Видалення пристані із порту
console.log('\nВидалення пристані із порту\n');

let withMarina = ports.filter(value => {
    return value.marina !== undefined
});

console.log(ports);
console.log(Math.floor(Math.random() * withMarina.length - 1));
withMarina[Math.floor(Math.random() * withMarina.length - 1)].marina = undefined;

console.log(ports);

//Прибуття/Відбуття корабля від пристані
console.log('\nПрибуття/Відбуття корабля від пристані\n');

let numberShip = findShip.number;
let forTime = marinas.find(value => value = numberShip);

console.log(`Прибуття ${forTime.timeArrival} \nВідбуття ${forTime.timeArrival}`);

//Пошук усіх кораблів на пристані
console.log('\nПошук усіх кораблів на пристані\n');

let allShips = ships.filter(value => {
    return value.marina === 3;
});

console.log(allShips);

