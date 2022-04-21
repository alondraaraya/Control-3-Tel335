import usersData from '../index'
import uuid from '../utils/uuid'
import {allUser} from '../actions/users'
import { KEY, SECRET } from '../utils/constants'
const claves = [];
exports.ObtenerToken = (id,key, secret) =>{
    let token = {}
    allUser.forEach(element => {
        if(element.id == id ){
            if(secret == SECRET){
                if(key == KEY){
    
                    let clave = uuid.getUUIDV4()
    
                    token = clave
                    claves.push({
                        ID: id,
                        TOKEN: token
                    })
                  
                }
            }
        }
    })
    return token
}


exports.BuscarUsuario = (token) =>{
    let usuario = ''
    console.log(claves)
    claves.forEach((element) => {
    if(token == element.TOKEN){
        usuario = element.ID
        allUser.forEach(element => {
            if(element.id == usuario){
                usuario = element
            }
        });
        }
    })
    return usuario
}