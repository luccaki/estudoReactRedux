module.exports = function(red, res, next){
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Methods', 'GETS, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}