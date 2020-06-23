const adminController = {
    index: function(req, res){
        return res.send("Hola Admin " + req.query.user);
    }
}

module.exports = adminController;