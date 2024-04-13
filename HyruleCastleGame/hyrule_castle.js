"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var sbire = fs.readFileSync('enemies.json', 'utf-8');
var allenemies = JSON.parse(sbire);
var players = fs.readFileSync('players.json', 'utf-8');
var allplayers = JSON.parse(players);
var boooss = fs.readFileSync('bosses.json', 'utf-8');
var allbosses = JSON.parse(boooss);
var mainfunctions_1 = require("./mainfunctions");
(0, mainfunctions_1.Fight)();