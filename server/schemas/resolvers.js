const resolvers = {
    Query: {
        hellowWorld: () => {
            return 'Hello World!';
        }    
    }
};

module.exports = resolvers;