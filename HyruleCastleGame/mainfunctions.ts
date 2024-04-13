
const c = require('ansi-colors');
const rl = require('readline-sync');
const getInput = (choice: string) => rl.question(choice);



import  Enemies  from './interenemies'
import Hero from './character'
import Boss from './boss';
import * as fs from'fs'





function getRandomEnemies (){
    let sbire = fs.readFileSync('enemies.json','utf-8')
    let allenemies : Enemies [] = JSON.parse(sbire)     
    const bad = interval(0, allenemies.length)
    let enemy = allenemies[bad] 
    return enemy
}

function getRandomPlayer (){
    let players = fs.readFileSync('players.json','utf-8')
    let allplayers : Hero [] = JSON.parse(players)
    const heroplayer = interval(0, allplayers.length)  
    let hero = allplayers[heroplayer]
    return hero
} 

function getRandomBoss (){
    let boooss = fs.readFileSync('bosses.json','utf-8')
    let allbosses : Boss [] = JSON.parse(boooss)
    const heroplayer = interval(0, allbosses.length)
    let boss = allbosses[heroplayer]
    return boss
}
  
function interval (min : number, max:number){
   return Math.floor(Math.random()* max - min)+ min
}



let hero = getRandomPlayer()
let FinalBoss = getRandomBoss()
let halfhp = hero.hp / 2
let maxhp = hero.hp
let fight : number = 9



function Round (){
    let enemy = getRandomEnemies()
    for(let i = 0; 0 <= enemy.hp; i++){ 
        console.log('\n'+'========================== ROUND '+[i+1]+ ' =========================='+'\n')  
        console.log(c.green(hero.name))
        console.log('♡ : '+ hero.hp)
        console.log('⚔ : '+hero.str+'\n')
        console.log(c.red(enemy.name))
        console.log('♡ : '+enemy.hp)
        console.log('⚔ : '+enemy.str+'\n')
        
        let choice: string = getInput('\n'+'Attack     or     Heal: ')
        if (choice.toLocaleLowerCase() !== 'attack' && choice.toLocaleLowerCase() !== 'heal'){
            console.log('\n'+"We didn't recognize your choice, please type Attack or Heal."+'\n')
            i--
            continue
        }
        else if (choice.toLocaleLowerCase() === 'attack'){
            enemy.hp = enemy.hp - hero.str
            if (enemy.hp <= 0){
                enemy.hp = 0;
            }
            console.log('\n'+'Your enemy lost '+hero.str+' HP, he has '+enemy.hp+' HP.'+'\n')
            if (enemy.hp <= 0){
                enemy.hp = 0;
                (console.log("You won the fight, you can go to the next floor."+'\n'))
                return;}
            }
            else if (choice.toLocaleLowerCase() === 'heal'){
            hero.hp = hero.hp + halfhp
            if (hero.hp > maxhp){
                hero.hp = maxhp;
            }
            console.log('\n'+'You healed yourself, You have now '+hero.hp+' HP.'+'\n')
             }
             hero.hp = hero.hp - enemy.str
             console.log(enemy.name+ ' attacked you, you lost '+ enemy.str+' HP'+'.'+'\n')
             if (hero.hp <= 0){
          
                return false;}
            }
        }

function Boss (){
    console.log('\n'+'======================== FINAL FLOOR ========================'+'\n')
    console.log("Congratulation, you killed all the sbires, you will face now the final Boss "+ FinalBoss.name +"!"+'\n')
    console.log("Be careful, you will need courage to vainquish him, good luck !")
    for (let i= 0; 0 <= FinalBoss.hp ; i++){
        console.log('\n'+'========================== ROUND '+[i+1]+ ' =========================='+'\n')        
        console.log(c.green(hero.name))
        console.log('♡ : '+ hero.hp)
        console.log('⚔ : '+hero.str+'\n')
        console.log(c.red(FinalBoss.name))
        console.log('♡ : '+(FinalBoss.hp))
        console.log('⚔ : '+FinalBoss.str+'\n')
        let choice: string = getInput('\n'+'Attack     or     Heal: ')
        if (choice.toLocaleLowerCase() !== 'attack' && choice.toLocaleLowerCase() !== 'heal'){
            console.log('\n'+"We didn't recognize your choice, please type Attack or Heal."+'\n')
            continue
        }
        else if (choice.toLocaleLowerCase() === 'attack'){
            FinalBoss.hp = FinalBoss.hp - hero.str
            if (FinalBoss.hp <= 0){
            FinalBoss.hp = 0
        }
        console.log('\n'+FinalBoss.name+' lost '+hero.str+' HP, he has '+FinalBoss.hp+' HP.'+'\n')
        if (FinalBoss.hp <= 0){
            FinalBoss.hp = 0;
            console.log("=================== CONGRATULATIONS!!! ==================="+'\n')
            console.log("You defeated "+ FinalBoss.name+'. You finished the game.'+'\n')
            return;}
        }
        else if (choice.toLocaleLowerCase() === 'heal'){
            hero.hp += halfhp
            if (hero.hp > maxhp)
            hero.hp = maxhp
            console.log('\n'+'You healed yourself, You have now '+hero.hp+' HP.')
            console.log('')
        }
        hero.hp = hero.hp - FinalBoss.str
        console.log('')
        console.log(FinalBoss.name+ ' attacked you, you lost '+ FinalBoss.str+' HP'+'.'+'\n')

    
    }
} 

export function Fight (){
    for ( let i= 1; i<= fight; i++){
        console.log('\n'+'========================== FLOOR '+[i]+ ' =========================='+'\n')

        if(Round()== false){
            console.log('\n'+"=================== KO ========= KO ========= KO ==================="+'\n')
            console.log('                          THE GAME IS OVER                               '+'\n')
            console.log('                          THE GAME IS OVER                               '+'\n')
            console.log('                          THE GAME IS OVER                               '+'\n')
            return;}

       
        
    }
    Boss()
}