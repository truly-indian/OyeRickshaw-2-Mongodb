module.exports = (req,res,next) => {
   if(!req.session.isLoggedIn) {
       return res.status(400).json({message:'Not Logged In'})
   }
   next()
}
