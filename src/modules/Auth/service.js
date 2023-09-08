import userModel from "../../db/models";

class AuthService {
    static async storeUser(payloads){
        let user = await userModel.create(payloads)
        return user
    }

    static async findById(ID){
        let user = await userModel.findById(ID);
        return user;
    }

    static async findByEmail(email){
        let user = await userModel.find(email)
        return user;
    }
}

export default AuthService