import  Enemies  from './interenemies'
import * as fs from'fs'



export function getRandomEnemies (){
    let sbire = fs.readFileSync('enemies.json','utf-8')
    let allenemies : Enemies [] = JSON.parse(sbire)
 
       
    //    return allplayers[i].id[Math.floor(Math.random() * allplayers.length)]
    const bad = interval(0, allenemies.length)

    let enemy = allenemies[bad]
   
    // console.log(enemy.name)  
    return enemy
    }


export function interval (min : number, max:number){
    return Math.floor(Math.random()* max - min)+ min
}