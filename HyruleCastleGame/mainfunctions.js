"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fight = void 0;
var c = require('ansi-colors');
var rl = require('readline-sync');
var getInput = function (choice) { return rl.question(choice); };
var fs = require("fs");
var sbire = fs.readFileSync('enemies.json', 'utf-8');
var allenemies = JSON.parse(sbire);
function getRandomEnemies() {
    var bad = interval(0, allenemies.length);
    var enemy = allenemies[bad];
    return enemy;
}
function getRandomPlayer() {
    var players = fs.readFileSync('players.json', 'utf-8');
    var allplayers = JSON.parse(players);
    var heroplayer = interval(0, allplayers.length);
    var hero = allplayers[heroplayer];
    return hero;
}
function getRandomBoss() {
    var boooss = fs.readFileSync('bosses.json', 'utf-8');
    var allbosses = JSON.parse(boooss);
    var heroplayer = interval(0, allbosses.length);
    var boss = allbosses[heroplayer];
    return boss;
}
function interval(min, max) {
    return Math.floor(Math.random() * max - min) + min;
}
var hero = getRandomPlayer();
var FinalBoss = getRandomBoss();
var halfhp = hero.hp / 2;
var maxhp = hero.hp;
var fight = 9;
function Round() {
    var enemy = getRandomEnemies();
    for (var i = 0; 0 <= enemy.hp; i++) {
        console.log('\n' + '========================== ROUND ' + [i + 1] + ' ==========================' + '\n');
        console.log(c.green(hero.name));
        console.log('♡ : ' + hero.hp);
        console.log('⚔ : ' + hero.str + '\n');
        console.log(c.red(enemy.name));
        console.log('♡ : ' + enemy.hp);
        console.log('⚔ : ' + enemy.str + '\n');
        var choice = getInput('\n' + 'Attack     or     Heal: ');
        if (choice.toLocaleLowerCase() !== 'attack' && choice.toLocaleLowerCase() !== 'heal') {
            console.log('\n' + "We didn't recognize your choice, please type Attack or Heal." + '\n');
            i--;
            continue;
        }
        else if (choice.toLocaleLowerCase() === 'attack') {
            enemy.hp = enemy.hp - hero.str;
            if (enemy.hp <= 0) {
                enemy.hp = 0;
            }
            console.log('\n' + 'Your enemy lost ' + hero.str + ' HP, he has ' + enemy.hp + ' HP.' + '\n');
            if (enemy.hp <= 0) {
                enemy.hp = 0;
                (console.log("You won the fight, you can go to the next floor." + '\n'));
                return;
            }
        }
        else if (choice.toLocaleLowerCase() === 'heal') {
            hero.hp = hero.hp + halfhp;
            if (hero.hp > maxhp) {
                hero.hp = maxhp;
            }
            console.log('\n' + 'You healed yourself, You have now ' + hero.hp + ' HP.' + '\n');
        }
        hero.hp = hero.hp - enemy.str;
        console.log(enemy.name + ' attacked you, you lost ' + enemy.str + ' HP' + '.' + '\n');
        if (hero.hp <= 0) {
            return false;
        }
    }
}
function Boss() {
    console.log('\n' + '======================== FINAL FLOOR ========================' + '\n');
    console.log("Congratulation, you killed all the sbires, you will face now the final Boss " + FinalBoss.name + "!" + '\n');
    console.log("Be careful, you will need courage to vainquish him, good luck !");
    for (var i = 0; 0 <= FinalBoss.hp; i++) {
        console.log('\n' + '========================== ROUND ' + [i + 1] + ' ==========================' + '\n');
        console.log(c.green(hero.name));
        console.log('♡ : ' + hero.hp);
        console.log('⚔ : ' + hero.str + '\n');
        console.log(c.red(FinalBoss.name));
        console.log('♡ : ' + (FinalBoss.hp));
        console.log('⚔ : ' + FinalBoss.str + '\n');
        var choice = getInput('\n' + 'Attack     or     Heal: ');
        if (choice.toLocaleLowerCase() !== 'attack' && choice.toLocaleLowerCase() !== 'heal') {
            console.log('\n' + "We didn't recognize your choice, please type Attack or Heal." + '\n');
            continue;
        }
        else if (choice.toLocaleLowerCase() === 'attack') {
            FinalBoss.hp = FinalBoss.hp - hero.str;
            if (FinalBoss.hp <= 0) {
                FinalBoss.hp = 0;
            }
            console.log('\n' + FinalBoss.name + ' lost ' + hero.str + ' HP, he has ' + FinalBoss.hp + ' HP.' + '\n');
            if (FinalBoss.hp <= 0) {
                FinalBoss.hp = 0;
                console.log("=================== CONGRATULATIONS!!! ===================" + '\n');
                console.log("You defeated " + FinalBoss.name + '. You finished the game.' + '\n');
                return;
            }
        }
        else if (choice.toLocaleLowerCase() === 'heal') {
            hero.hp += halfhp;
            if (hero.hp > maxhp)
                hero.hp = maxhp;
            console.log('\n' + 'You healed yourself, You have now ' + hero.hp + ' HP.');
            console.log('');
        }
        hero.hp = hero.hp - FinalBoss.str;
        console.log('');
        console.log(FinalBoss.name + ' attacked you, you lost ' + FinalBoss.str + ' HP' + '.' + '\n');
    }
}
function Fight() {
    for (var i = 1; i <= fight; i++) {
        console.log('\n' + '========================== FLOOR ' + [i] + ' ==========================' + '\n');
        if (Round() == false) {
            console.log('\n' + "=================== KO ========= KO ========= KO ===================" + '\n');
            console.log('                          THE GAME IS OVER                               ' + '\n');
            console.log('                          THE GAME IS OVER                               ' + '\n');
            console.log('                          THE GAME IS OVER                               ' + '\n');
            return;
        }
    }
    Boss();
}
exports.Fight = Fight;
