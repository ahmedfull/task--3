const posts = require['apply../helper/posts.json']



exports.GetAllPosts = (req,res)=>{

    res.json({
        msg : posts,
    })
    

}