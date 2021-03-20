import {Battle} from "../sim/battle";

/** Set up server */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const jsonParser = bodyParser.json();

const app = express();
app.use(cors())
app.use(jsonParser); // allow to read POST body

app.get('/', function (req, res, next) {
  res.status(200).json({msg: 'Hello, World!'});
});

app.post('/sim/turn', function (req, res, next) {
  const data = req.body;
  const result = computeTurn(data);

  res.status(200).json(result);
  //res.end();
});

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})

/** Turn simulation */

function computeTurn(data) {
  const opts = {
    formatid: '[Sunrise] 2v2',
    p1: {
      name: 'player',
      team: [
        {
          name: 'gastly1',
          species: 'gastly',
          item: undefined,
          ability: undefined,
          moves: [ 'bind', 'tackle' ],
          nature: 'hardy',
          gender: 'M',
          level: 5,
          evs: ['hp': 0, 'atk': 0, 'def': 0, 'spa': 0, 'spd': 0, 'spe': 0],
          ivs: ['hp': 0, 'atk': 0, 'def': 0, 'spa': 0, 'spd': 0, 'spe': 0],
        },
        {
          name: 'gastly2',
          species: 'gastly',
          item: undefined,
          ability: undefined,
          moves: [ 'bind', 'tackle' ],
          nature: 'hardy',
          gender: 'M',
          level: 5,
          evs: ['hp': 0, 'atk': 0, 'def': 0, 'spa': 0, 'spd': 0, 'spe': 0],
          ivs: ['hp': 0, 'atk': 0, 'def': 0, 'spa': 0, 'spd': 0, 'spe': 0],
        },
      ],
    },
    p2: {
      name: 'ai',
      team: [
        {
          name: 'hoothoot1',
          species: 'hoothoot',
          item: undefined,
          ability: undefined,
          moves: [ 'foresight', 'tackle' ],
          nature: 'hardy',
          gender: 'M',
          level: 5,
          evs: ['hp': 0, 'atk': 0, 'def': 0, 'spa': 0, 'spd': 0, 'spe': 0],
          ivs: ['hp': 0, 'atk': 0, 'def': 0, 'spa': 0, 'spd': 0, 'spe': 0],
        },
        {
          name: 'hoothoot2',
          species: 'hoothoot',
          item: undefined,
          ability: undefined,
          moves: [ 'foresight', 'tackle' ],
          nature: 'hardy',
          gender: 'M',
          level: 5,
          evs: ['hp': 0, 'atk': 0, 'def': 0, 'spa': 0, 'spd': 0, 'spe': 0],
          ivs: ['hp': 0, 'atk': 0, 'def': 0, 'spa': 0, 'spd': 0, 'spe': 0],
        },
      ],
    },
  };
  const battle = new Battle(opts);
  battle.choose('p1', 'move 1 1, move 2 1');
  battle.choose('p2', 'move 1 1, move 2 2');
  battle.choose('p1', 'move 2 1, move 2 1');
  battle.choose('p2', 'move 2 2, move 2 2');
  //console.log(battle.log);

  return { log: battle.log };
}
