import AuthService from "./service.js"

class AuthController {
    static async signup(req, res) {
        try {
            const {password, username, email, firstname} = req.body
            let payload = {
                password,
                username,
                email,
                firstname
            }
            console.log("BUKOLA O.")
            let findEmail = await AuthService.findByEmail(email);
            if(findEmail){
                return res.JSON("email already exist");
            }
            let user = await AuthService.storeUser(payload)

            return res.JSON(user)

        } catch (error) {
            return error
        }
    }
}

export default AuthController