module.exports={
    devServer:{
         open:true,
         port:8805,
         host:"localhost",
         proxy:{
             '/api':{
                 target:"http://localhost:8805",
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