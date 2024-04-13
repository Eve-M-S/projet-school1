import  Enemies  from './interenemies'
import Hero from './character'
import Boss from './boss';
import * as fs from'fs'

let sbire = fs.readFileSync('enemies.json','utf-8')
let allenemies : Enemies [] = JSON.parse(sbire)
let players = fs.readFileSync('players.json','utf-8')
let allplayers : Hero [] = JSON.parse(players)
let boooss = fs.readFileSync('bosses.json','utf-8')
let allbosses : Boss [] = JSON.parse(boooss)


import { Fight } from './mainfunctions';


Fight()
    
    
  








 
     
            


    

    


