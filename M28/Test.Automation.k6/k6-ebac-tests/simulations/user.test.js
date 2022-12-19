import { http } from "k6/http";
import { group, sleep } from "k6";
import Login from '../request/login.request';
import data from '../data/usuarios.json'

export default function () {

    let login = new Login()
    
    group('login and get toke', () => {
        login.acess(data.usuarioOk.user, data.usuarioOk.pass)
    })

    group ('list users', () => {
        
    })
   
}