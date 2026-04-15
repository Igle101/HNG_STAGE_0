function processingGenderData( name, apiData){


    const { gender, probability,count}= apiData;

    const is_confident= probability >= 0.7 && count >=100;
    const processed_at = new Date().toISOString();

    return{
        name,
        gender,
        probability,
        sample_size: count,
        is_confident,
        processed_at,
    };
}
export default { processingGenderData};