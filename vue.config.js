// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  devServer: {
    port: 6688, // Set the port to your desired value
  },
  transpileDependencies: true,
});
