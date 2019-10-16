module.exports={
    devServer:{
         open:true,
         port:8800,
         host:"localhost",
         proxy:{
             '/api':{
                 target:"http://localhost:8800",
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