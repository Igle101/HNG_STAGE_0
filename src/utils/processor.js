function processingGenderData( name, apiData){


    const { gender, probability,count}= apiData;

    const sample_size  = count
    const is_confident= probability >= 0.7 && sample_size >=100;
    const processed_at = new Date().toISOString();

    return{
        name,
        gender,
        probability,
        sample_size,
        is_confident,
        processed_at,
    };
}
export default { processingGenderData};