import { Account, ID,Client } from "appwrite";
import config from "../config";

// const client =new Client()
// .setEndpoint(config.appwriteUrl)
// .setProject(config.appwriteProjectId)

// const account= new Account(client)

// const user = await account.create({
//     userId: ID.unique(), 
//     email: 'email@example.com', 
//     password: 'password'
// });
// 


export class AuthService{
    client=new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
        
        this.account=new Account(this.client)
    }
    async  createAccount({email,password,name}){
       try{const userAccount= await this.account.create({id:ID.unique(),email,password,name})
       if(userAccount){
        //calls login function
        login(email,password)
       }
       else{
        return userAccount
       }
    }
    catch(error){

        throw(error)
    }
    }
    async login({email,password}){
        return this.account.createEmailPasswordSession({email,password})
    }
    async getUsers(){
        try {
            return this.account.getSession()
        } catch (error) {
            console.log("Error:: getUser error");
            
        }
        //if there is any other kind of error happens but we dont want other components to be effected because of this error then use this
        
        return null
    }
    async logout(){
        try {
            return this.account.deleteSessions()
        } catch (error) {
            console.log('error:: logout error');
            
        }
    }
}

const authService=new AuthService()
export default authService
