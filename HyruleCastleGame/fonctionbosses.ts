import Boss from './boss'
import * as fs from'fs'

let boooss = fs.readFileSync('bosses.json','utf-8')
let allbosses : Boss [] = JSON.parse(boooss)



export function getRandomBoss (){
 
       
    //    return allplayers[i].id[Math.floor(Math.random() * allplayers.length)]
    const heroplayer = interval(0, allbosses.length)

    let boss = allbosses[heroplayer]
   
    console.log(boss.name)  
    return boss
    }
   

getRandomBoss()

function interval (min : number, max:number){
    return Math.floor(Math.random()* max - min)+ min
}
