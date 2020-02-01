# Objective
- This project showcases Express + Swagger + ClaudiaJS
- Express is used as the backend framework
- ClaudiaJS is used to deploy the Express code to a serverless architecture on AWS API Gateway powered by Lambda
- Swagger for documentation (duh) - more importantly, how documentation is done within the code itself so that it can always be up-to-date if the developer bothers to update the comments

# Instructions
- To run code: `npm run start` 
- To deploy for the first time to AWS: `npm run claudia-init`
- Subsequent deployments to AWS: `npm run update-api`

# Libraries Used
- `swagger-jsdoc`
- `swagger-ui-express`
- `claudia`
- `aws-serverless-express`