const postLogin=(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
        

    console.log(username,password)
    if(username === "Deepak" && password === "Education"){
        req.session.isLoggedIn = true;
        req.session.username = username;
    

        console.log("successful Login")
        res.redirect('/admin')
    } else{
        console.log("User not found");

        return res.redirect('/login')
    }
    
    
}


const getLogout = (req,res,next)=>{
    req.session.isLoggedIn = false;
    req.session.destroy();
    res.redirect('/');
}

module.exports = { postLogin ,getLogout }