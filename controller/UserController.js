exports.LoginUser =(req,res)=>{
    const username = req.body.username; 
    const password =  req.body.password;

    
    if(username == "" || password == ""){

        return res.json({

          msg : "الرجاء ادخال البيانات",
          state : 0,

        })

}

if(username == "ahmed" && password == "abj1468"){

    return res.json({

      msg : 'اهلا وسهلا بك',
      state :1,                

    })

}
res.json({
    msg : 'ادخال خاطئ',
    state:0,
})

}   


exports.SignUpUser =(req,res)=>{
    const username = req.body.username; 
    const password =  req.body.password;
   const email = req.body.email;
   const phone = req.body.phone;
    
    if(!username||!password||!email||!phone){

     return res.json({

      msg : " الرجاء ادخال البيانات",
      state : 0,

       })
    }


req.mydata = req.body
if(username.trim() == "" || password.trim() == "" || email.trim() == "" || phone.trim() == ""){

    return res.json({

      msg : "الرجاء ادخال البيانات",
      state : 0,

    })

}


res.json({

    msg : "تم تسجيلك بنجاح",
    state : 1,
 })
}