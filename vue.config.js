module.exports={
    devServer:{
         open:true,
<<<<<<< HEAD
         port:8802,
         host:"localhost",
         proxy:{
             '/api':{
                 target:"http://localhost:8802",
=======
         port:8801,
         host:"127.0.0.1",
         proxy:{
             '/api':{
                 target:"http://localhost:8801",
>>>>>>> city-search
                 changeOrigin:true,
                 pathRewrite:{
                     "^/api":''
                 }
             },

         }
    },
    productionSourceMap:false,
    lintOnSave:false
}