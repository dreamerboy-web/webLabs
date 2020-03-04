
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

let addNewShip = (newShip) =>{
    ports.push(newShip);
};

addNewShip(newShip);

console.log(ports);

//видалення першого порту
console.log('\nвидалення першого порту\n');
console.log(ports);
let delatePort = (ports) =>{
    ports.shift();
};
delatePort(ports);
console.log(ports);

//знаходження конкретного порту
console.log('\nзнаходження конкретного порту\n');

let findPortClass = (port) =>{
    let ovePort;

    ports.forEach((value,index) => {

        if (value.name === port.name &&
            value.number === port.number &&
            value.marina === port.marina) ovePort = value ;
    });

    console.log(`Наш порт: ${ovePort.name} з номенром ${ovePort.number}`)
};
let somePort = new Port(6, 'Б.О.М.Ж.', undefined);
findPortClass(somePort);

// let findPort = ports.find(value => {
//     return value.name = 'NewPort'
// });
//console.log(findPort);

//доданя ноового корабля
console.log('\nдоданя ноового корабля\n');
 let someNewShip = new Ship(Math.round(Math.random()*999), "NewPlayer", undefined);
console.log(ships);
let addNewShiper = (ship) =>{
    ships.push(ship)
};

addNewShiper(someNewShip);
console.log(ships);

//видаленя рандомного корабля
console.log('\nвидаленя рандомного корабля\n');
console.log(ships);

let someNewShopForDell = new Ship(420, "Cannabis", undefined);
let delateShip = (ship) =>{
    ships.forEach((value,index, array) => {
        if(ship.number === value.number &&
        ship.name === value.name &&
        ship.marina === value.marina) array.splice(index, 1)
    })
};

delateShip(someNewShopForDell);



console.log(ships);

//знаходження конкретного корабля
console.log('\nзнаходження конкретного корабля\n');
let forFind = new Ship(999, "Infinity", 3);

let findShipClass = (ship) =>{
    let oveShip;

    ships.forEach((value,index) => {

        if (value.name === ship.name &&
            value.number === ship.number &&
            value.marina === ship.marina) oveShip = value ;
    });

    console.log(`Наш корабель: ${oveShip.name} з номенром ${oveShip.number}`)
};

findShipClass(forFind);

//Додавання пристані до порту
console.log('\nДодавання пристані до порту\n');


let addMarina = (port, marina) =>{
    if(port.marina !== undefined) console.log(`Порт номер ${port.number} уже має пристань!`)
    else {
        port.marina = marina.number;
        console.log(`Порт номер ${port.number} тепер пристань ${marina.number}!`)
    }
}



console.log(ports);

addMarina(ports[4],marinas[3]);

console.log(ports);

//Видалення пристані із порту
console.log('\nВидалення пристані із порту\n');

let deleteMarina = (port) =>{
    if(port.marina === undefined) console.log(`Порт з номер ${port.number} ітак не має пристані!`);
    else {
        port.marina = undefined;
        console.log(`Порт з номер ${port.number} тепер не має пристані!`)
    }
};

console.log(ports);

deleteMarina(ports[5]);

console.log(ports);

//Прибуття/Відбуття корабля від пристані
console.log('\nПрибуття/Відбуття корабля від пристані\n');

let timeShip = (ship, marina) =>{
    let timeArrival = marina.timeArrival;
    let timeDeparture = marina.timeDeparture;

    if(ship.marina === marina.number && timeDeparture !== undefined) console.log(`Корабель ${ship.name}
     прибув на пристань номер ${marina.number} о ${timeDeparture}, а відбув o ${timeArrival}`);
    else if(ship.marina === marina.number && timeArrival === undefined) console.log(`Корабель ${ship.name}
     прибув на пристань номер ${marina.number} о ${timeDeparture}, але ще не відбув`);
    else if(ship.marina !== marina.number) console.log(`Корабель ${ship.name}
     не прибував на пристань номер ${marina.number}`);


};



timeShip(ships[0], marinas[1]);

//Пошук усіх кораблів на пристані
console.log('\nПошук усіх кораблів на пристані\n');

let findAllShips = (ships, marina) =>{

    let allShips = ships.filter(value => {
        return value.marina === marina.number;
    });

    if (allShips.length === 0) console.log('Кораблыів на пристані немає!');
    else console.log(allShips);

};

findAllShips(ships, marinas[4]);