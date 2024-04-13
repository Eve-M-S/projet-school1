import Hero from './character'
import * as fs from'fs'

let players = fs.readFileSync('players.json','utf-8')
let allplayers : Hero [] = JSON.parse(players)



export default function getRandomPlayer (){
 
       
    //    return allplayers[i].id[Math.floor(Math.random() * allplayers.length)]
    const heroplayer = interval(0, allplayers.length)

    let hero = allplayers[heroplayer]
   
    // console.log(hero.name)  

    return hero
    }
   
   

getRandomPlayer()

function interval (min : number, max:number){
    return Math.floor(Math.random()* max - min)+ min
}





