import User from "../models/user.model.js";

export const signup = async (req,res) =>{
    const {email, password, name} = req.body;
    try {
        const userExists = await User.findOne({email});

        if(userExists) {
            return res.status(400).json({message:  "User is already exists"})
        }
    
        const user = await User.create({email,password,name});
    
        return res.status(201).json({user,message: "User created successfully"}); 
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const login = async (req,res) =>{
    res.send("Login Called");
};

export const logout = async (req,res) =>{
    res.send("Logout Called");
};