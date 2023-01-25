export default class Utils {
    static getBaseUrl (){
        switch(process.env.NODE_ENV){
            case 'development':
                return  `http://host.docker.internal:3000/api`
            case 'prodution':
                return 'localhost:3000/api'
        }        
    }
}