const app = require("express")();
const PORT = process.env.PORT || 3000;
const loader = require("./loaders");

async function startServer() {
  await loader(app);
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`);
  });
}
startServer();
