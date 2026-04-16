function toValidateName(name){
   
        

    if(!name || name.trim() === '' ){
        return res.status(400).json({
            status: ' error',
            message: 'missing required parameter: name',
        })
    };
    if(!isNaN ( name)){
        return {
            statusCode: 422,
            message: 'invalid parameter: it must be an non-empty string',
        }
    };
    if(typeof name !== 'string'){
        return res.status(422).json({
            status: 'error',
            message:'invalid input...must be an non-empty string',


        })
    };
    return null;


}

module.exports = {toValidateName};