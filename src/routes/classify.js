const express = require ('express');
const router = express.Router();

const {fetchGenderData }= require('../services/genderize');
const {processingGenderData}= require('../utils/processor').default;
const { toValidateName } = require('../utils/validation');

router.get('/classify',async(req , res)=>{
    const {name }= req.query;

    const validationError = toValidateName(name);
    if (validationError) {
        return res.status(validationError.statusCode).json({
            status: 'error',
            message: validationError.message,
        });

    }
    let apiData;
    try{
        apiData= await fetchGenderData(name);
    }
        
     catch(err){
                console.error('Genderize API error:',err.message);
                return res.status(502).json({
                    status: 'error',
                    message: ' Failed to reach the Genderise API.',
                })
            }
    if (!apiData.gender || apiData.count === 0 ){
         return res.status(404).json({
             status: 'error',
             message: 'No prediction available for the provided name',
             })    
         }
const processed = processingGenderData(name, apiData);
  return res.status(200).json({
    status: 'success',
    data: processed,
  })
})


module.exports = router;
