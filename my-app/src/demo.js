var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    message: String
    luck: Float!
    rollFiveDice: [Int]
    name: [String]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  message: () => {
    return Math.floor(Math.random()) < 5 ? 'Do it again' : 'great job';
    
  },
  luck: () => {
    return  Math.floor(Math.random()*11);
  },
  rollFiveDice: () => {
    return [1, 2, 3, 4, 5].map(_ => 1 + Math.floor(Math.random() * 6));
  },
  name :()=>{
      return ["kritika", " neha", "shivani"];
  },
  
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');