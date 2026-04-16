HNG Stage 0 (Genderize API classifier)
An API that predicts the  gender of a name using the Genderize.io API. 
Built with Node.js and Express.js.

live URL on Vercel:
https://hng-stage-0-eosin.vercel.app/api/classify?name=James

endpoint:
"GET /api/classify",

Success Response `200`
 
'json
{
  "status": "success",
  "data": {
    "name": "James",
    "gender": "male",
    "probability": 0.99,
    "sample_size": 1234,
    "is_confident": true,
    "processed_at": "2026-04-10T10:30:00.000Z"
  }
}
'
Error Responses:
 

Missing or empty `name`       `400`  `Missing required query parameter: name`        
`name` is not a string           `422`   `Invalid parameter: name must be a non-empty string` 
 No gender data for name         `404`  `No prediction available for the provided name` 
 Genderize API unreachable        `502`   `Failed to reach the Genderize API...`         
 
All errors follow this shape:
`json
{
  "status": "error",
  "message": "<description>"
}
`
