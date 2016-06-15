// @flow

const appRouter = (app: Object) => {
  // load home page
  app.get('/', (req, res) => {
    res.send("Hello World");
  });
};

module.exports = appRouter;
