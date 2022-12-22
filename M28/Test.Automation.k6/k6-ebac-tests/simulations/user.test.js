import { http } from "k6/http";
import { group, sleep } from "k6";
import Login from '../request/login.request';
import data from '../data/usuarios.json'

export default function () {

    let login = new Login()
    
    group('login and get token', () => {
        login.access(data.usuarioOk.user,data.usuarioOk.pass)
    })

    group ('list users', () => {
        
    })
   
}