function toValidateName(name){
    if(name===undefined || name=== null || typeof name === 'string' && name.trim()=== ''){
        return res.status(400).json({
           status: 'error',
           message: 'Missing requirement..try providing the basic requirements',

        });
        
    }
    if(typeof name !== 'string'){
        return res.status(422).json({
            status: 'error',
            message:'invalid input...must be an non-empty string',


        })
    };
    return null;


}

module.exports = {toValidateName};