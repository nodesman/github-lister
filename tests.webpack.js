var context = require.context('./tests', true, /Test\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);