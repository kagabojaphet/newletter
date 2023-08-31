//all logic
import User from "../model/user" 

class usercontroller{
    static async createUser(req,res){
        try{
            const kk=await User.create(raq,body);
            return res.status(201).json({
                message:`user successfuly created`,
                data:kk

            });
        }
        catch(error){
            if(error.code==11000){
                return res.status(403).json({
                    message:`user already exist`
                });
            }
            else{
                return res.status(500).json({
                    message:error
                });
            }
        }
    }
}
export default usercontroller