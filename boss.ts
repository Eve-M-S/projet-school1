import character from './character'; 
import { Link } from './character';
import enemy from './bokoblins';
import { enemies } from './bokoblins';
import { link } from 'fs';
const c = require('ansi-colors');
const rl = require('readline-sync')

const getInput = (choice: string) => rl.question(choice)
 
 
 
 export default interface boss {
    name : string
    HP : number
    STR : number
}

export const  Boss_Ganon: boss = {
    name : 'Ganon',
    HP : 150, 
    STR : 20,
}
export const bigboss: boss []= 
[Boss_Ganon]

