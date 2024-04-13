import character from './character'; 
import { Link } from './character';
import enemy from './bokoblins';
import { enemies } from './bokoblins';
import { link } from 'fs';
import { EventEmitterAsyncResource } from 'events';
import boss from './boss';
import { bigboss } from './boss';

const c = require('ansi-colors');
const rl = require('readline-sync')
const getInput = (choice: string) => rl.question(choice)



export function Round (i: number){
    let combat = i + 1

 
    for (let j= 0; 0 <= enemies[i].HP ; j++){
        let choice: string = getInput('\n'+'Attack     or     Heal: ')
     

        if (choice.toLocaleLowerCase() !== 'attack' && choice.toLocaleLowerCase() !== 'heal'){
            
            console.log('\n'+"We didn't recognize your choice, please type Attack or Heal."+'\n')
            continue
           
        }
        
        else if (choice.toLocaleLowerCase() === 'attack'){
            // console.log('test')
            enemies[i].HP = enemies[i].HP - Link.STR
            console.log('\n'+'Your enemy lost '+Link.STR+' HP, he has '+enemies[i].HP+' HP.'+'\n')
            if (enemies[i].HP == 0){
                (console.log("You won the fight, you can go to the next floor."+'\n'))
                return;}
              
              
         
            //console.log(boko[0].HP)
            
         }
         else if (choice.toLocaleLowerCase() === 'heal'){
             Link.HP = Link.HP + 30
             if (Link.HP > 60 )
             Link.HP = 60
             console.log('\n'+'You healed yourself, You have now '+Link.HP+' HP.')
             console.log('')
             
         }
         Link.HP = Link.HP - enemies[i].STR
         console.log('')
         console.log(enemies[i].name+ ' attacked you, you lost '+ enemies[i].STR+' HP'+'.'+'\n')

         if (Link.HP == 0){
            console.log('\n'+"=================== KO ========= KO ========= KO ==================="+'\n')
            console.log('                          THE GAME IS OVER                               '+'\n')
            console.log('                          THE GAME IS OVER                               '+'\n')
            console.log('                          THE GAME IS OVER                                '+'\n')
            break;}

  
       

        let a = j +2
         
         console.log('\n'+'========================== ROUND '+a+ ' =========================='+'\n')
        
         console.log(c.green(Link.name))
         console.log('HP= '+ Link.HP+'\n')
      
         console.log(c.red(enemies[i].name))
         console.log('HP= '+enemies[i].HP+'\n')   
        
    }
  

    } 

    function Boss (i:number){
        let combat = i + 1
    
        for (let j= 0; 0 <= bigboss[i].HP ; j++){
            let choice: string = getInput('\n'+'Attack     or     Heal: ')
         
    
            if (choice.toLocaleLowerCase() !== 'attack' && choice.toLocaleLowerCase() !== 'heal'){
                
                console.log('\n'+"We didn't recognize your choice, please type Attack or Heal."+'\n')
                continue
               
            }
            
            else if (choice.toLocaleLowerCase() === 'attack'){
                // console.log('test')
                bigboss[i].HP = bigboss[i].HP - Link.STR
                console.log('\n'+bigboss[i].name+' lost '+Link.STR+' HP, he has '+bigboss[i].HP+' HP.'+'\n')
                if (bigboss[i].HP == 0){
                        console.log("=================== CONGRATULATIONS!!! ==================="+'\n')
                        console.log("You defeated "+ bigboss[i].name+'.You finished the game.'+'\n')
                    return;}
    
                
             }
             else if (choice.toLocaleLowerCase() === 'heal'){
                 Link.HP = Link.HP + 30
                 if (Link.HP > 60 )
                 Link.HP = 60
                 console.log('\n'+'You healed yourself, You have now '+Link.HP+' HP.')
                 console.log('')
                 
             }
             Link.HP = Link.HP - bigboss[i].STR
             console.log('')
             console.log(bigboss[i].name+ ' attacked you, you lost '+ bigboss[i].STR+' HP'+'.'+'\n')
    
             if (Link.HP == 0){
                console.log('\n'+"=================== KO ========= KO ========= KO ==================="+'\n')
                console.log('                               THE GAME IS OVER                               '+'\n')
                console.log('                               THE GAME IS OVER                               '+'\n')
                console.log('                               THE GAME IS OVER                                '+'\n')
                break;}
    
    
            let a = j +2
             
             console.log('\n'+'========================== ROUND '+a+ ' =========================='+'\n')
            
             console.log(c.green(Link.name))
             console.log('HP= '+ Link.HP+'\n')
          
             console.log(c.red(bigboss[i].name))
             console.log('HP= '+bigboss[i].HP+'\n')

        }
        } 

    export function Fight (){
    
        for ( let i= 0; i<= 8; i++){
            let combat = i + 1
          

            if(enemies[i]== enemies[7]){
                console.log("You almost reach the final boss!! Only 2 floor left!!"+'\n')
             
            }
            if(enemies[8].HP== 0){
                console.log("Congratulation, you killed all the sbires, you will face now the final Boss Ganon!"+'\n')
                console.log("Be careful, you will need courage to vainquish him, good luck !")
            }
          
    
          
            console.log('\n'+'========================== FLOOR '+combat+' =========================='+'\n')
            console.log('\n'+'========================== ROUND 1 =========================='+'\n')
           
            console.log(c.green(Link.name))
            console.log('HP= '+ Link.HP+'\n')
           
            console.log(c.red(enemies[i].name))
            console.log('HP= '+enemies[i].HP+'\n')
         
            Round(i)
            if (Link.HP == 0){
                break
            }
        }
        for (let i = 0; i <= 1; i ++){
            console.log('\n'+'========================== FINAL FLOOR =========================='+'\n')
            console.log('\n'+'========================== ROUND 1 =========================='+'\n')
           
            console.log(c.green(Link.name))
            console.log('HP= '+ Link.HP+'\n')
           
            console.log(c.red(bigboss[i].name))
            console.log('HP= '+(bigboss[i].HP+'\n'))
            

            Boss(i)
            if (Link.HP == 0){
                break
            }
            if (bigboss[i].HP == 0){
             break}
 

        }
       
    }

      
       
    