import User from "../models/userModel.js"

export const getUsers = async(req, res) => {
    try{
        const users = await User.find()
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}

export const getUser = async(req, res) => {
    try{
        const user = await User.findOne({email: req.params.email})
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}

export const createUser = async(req, res) => {
    try{
        const user = await User.create({
            name: req.body.name,
            lasname: req.body.lasname,
            email: req.body.email,
            password: req.body.password,
            active: req.body.active
        })
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}

export const updateUser = async(req, res) => {
    try{
        const user = await User.findAndUpdate(
            {
                ema: req.body.email
            },
            {
                name: req.body.name,
                lasname: req.body.lasname,
                password: req.body.password,
                active: req.body.activeil,
            },
            {new: true}
        )
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }

}

export const deleteUser = async(req, res) => {
    try{
        const user = await User.findAndDelete({ email: req.body.email })
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}
