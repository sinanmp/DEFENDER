import productDb from "./model/ProductModel";

class Controller {
    async addProduct(req,res){
        try {
            const body = req.body
            if(!body.productName){
                return res.status(400).json({
                    error:true ,
                    message : "need a name for product"
                })
            }else if(!body.images.length){
                return res.status(400).json({
                    error:true ,
                    message : "please upload atleast 1 image"
                })
            } else if(!body.art_number) {
              return res.status(400).json({
                error : true , 
                
              })
            } else {
                await productDb.create({
                    productName : body.productName,
                    art_number : body.art_number ,

                })
            }

        } catch (error) {
            res.status(500).json({
                error:true ,
                message : "internel server error"
            })
        }
    }
}



export default new Controller()