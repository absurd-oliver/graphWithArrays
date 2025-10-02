// empty: 0
// filled: #
var arrays = {
    a10: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    a9: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    a8: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    a7: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    a6: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    a5: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    a4: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    a3: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    a2: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    a1: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    a0: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    a: [' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅', ' ̅'],
}

let createdElem10, createdElem9, createdElem8, createdElem7, createdElem6, createdElem5, createdElem4, createdElem3, createdElem2, createdElem1, createdElem0, createdElema;

function parseCoordinates(x, y, isFilling) {
    let key = `a${y}`;
    if (!arrays[key]) {
        console.error(`Error: Array with key '${key}' does not exist.`);
        return;
    }
    if (x >= arrays[key].length || x < 0 || y > 10 || y < 0) {
        console.error(`Error: Coordinates (${x}, ${y}) are out of bounds.`);
        return;
    }

    let originalValue = arrays[key][x];

    if (isFilling) {
        arrays[key][x] = '#';
    } else {
        arrays[key][x] = '0';
    }

    drawScene();
    console.log(`Updated (${x}, ${y}) from '${originalValue}' to '${arrays[key][x]}'`);
}

function parseInputs(val) {
    if (!document.getElementById('xInput')) {
        return
    }
    if (!document.getElementById('yInput')) {
        return
    }
    let x = document.getElementById('xInput').value;
    let y = document.getElementById('yInput').value;
    if (val === 1) {
        parseCoordinates(x, y, true);
    }
    if (val === 0) {
        parseCoordinates(x, y, false);
    }
}

function createScene() {
    createdElem10 = document.createElement('p');
    createdElem10.setAttribute('id', 'createdElem10');
    createdElem10.setAttribute('class', 'drawClass');
    document.body.appendChild(createdElem10);

    createdElem9 = document.createElement('p');
    createdElem9.setAttribute('id', 'createdElem9');
    createdElem9.setAttribute('class', 'drawClass');
    document.body.appendChild(createdElem9);

    createdElem8 = document.createElement('p');
    createdElem8.setAttribute('id', 'createdElem8');
    createdElem8.setAttribute('class', 'drawClass');
    document.body.appendChild(createdElem8);

    createdElem7 = document.createElement('p');
    createdElem7.setAttribute('id', 'createdElem7');
    createdElem7.setAttribute('class', 'drawClass');
    document.body.appendChild(createdElem7);

    createdElem6 = document.createElement('p');
    createdElem6.setAttribute('id', 'createdElem6');
    createdElem6.setAttribute('class', 'drawClass');
    document.body.appendChild(createdElem6);

    createdElem5 = document.createElement('p');
    createdElem5.setAttribute('id', 'createdElem5');
    createdElem5.setAttribute('class', 'drawClass');
    document.body.appendChild(createdElem5);

    createdElem4 = document.createElement('p');
    createdElem4.setAttribute('id', 'createdElem4');
    createdElem4.setAttribute('class', 'drawClass');
    document.body.appendChild(createdElem4);

    createdElem3 = document.createElement('p');
    createdElem3.setAttribute('id', 'createdElem3');
    createdElem3.setAttribute('class', 'drawClass');
    document.body.appendChild(createdElem3);

    createdElem2 = document.createElement('p');
    createdElem2.setAttribute('id', 'createdElem2');
    createdElem2.setAttribute('class', 'drawClass');
    document.body.appendChild(createdElem2);

    createdElem1 = document.createElement('p');
    createdElem1.setAttribute('id', 'createdElem1');
    createdElem1.setAttribute('class', 'drawClass');
    document.body.appendChild(createdElem1);

    createdElem0 = document.createElement('p');
    createdElem0.setAttribute('id', 'createdElem0');
    createdElem0.setAttribute('class', 'drawClass');
    document.body.appendChild(createdElem0);

    createdElema = document.createElement('p');
    createdElema.setAttribute('id', 'createdElema');
    createdElema.setAttribute('class', 'drawClass');
    document.body.appendChild(createdElema);
}


function drawScene() {
    if (!document.getElementById('createdElem0')) {
        createScene();
    }
    createdElem10.textContent = "|" + arrays.a10.join('  ');
    createdElem9.textContent = "|" + arrays.a9.join('  ');
    createdElem8.textContent = "|" + arrays.a8.join('  ');
    createdElem7.textContent = "|" + arrays.a7.join('  ');
    createdElem6.textContent = "|" + arrays.a6.join('  ');
    createdElem5.textContent = "|" + arrays.a5.join('  ');
    createdElem4.textContent = "|" + arrays.a4.join('  ');
    createdElem3.textContent = "|" + arrays.a3.join('  ');
    createdElem2.textContent = "|" + arrays.a2.join('  ');
    createdElem1.textContent = "|" + arrays.a1.join('  ');
    createdElem0.textContent = "|" + arrays.a0.join('  ');
    createdElem0.textContent = arrays.a.join('') + arrays.a.join('') + arrays.a.join('') + arrays.a.join('') + arrays.a.join('');
}


drawScene();

parseCoordinates(0, 0, true);
parseCoordinates(1, 1, true);
parseCoordinates(2, 2, true);
parseCoordinates(3, 3, true);
parseCoordinates(4, 4, true);
parseCoordinates(5, 5, true);
parseCoordinates(6, 6, true);
parseCoordinates(7, 7, true);
parseCoordinates(8, 8, true);
parseCoordinates(9, 9, true);
parseCoordinates(10, 10, true);
