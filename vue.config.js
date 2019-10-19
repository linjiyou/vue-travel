module.exports={
    devServer:{
         open:true,
         port:8804,
         host:"localhost",
         proxy:{
             '/api':{
                 target:"http://localhost:8804",
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