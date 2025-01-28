import productDb from "./model/ProductModel.js";

class Controller {

    async  login(req,res) {
        try {
            const {email , password} = req.body
            if(email==process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASS){
                return res.status(200).json({
                    error:false,
                    message:"Admin logged in successfully"
                })
            }

            res.status(400).json({
                error:true ,
                message: "invalid credentials"
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error:true ,
                message:"Internel server error"
            })
        }    
    }



    async addProduct(req,res){
        try {
            const body = req.body
            console.log("body getting here : ",req.body)
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
            } else if(!body.articleNumber) {
              return res.status(400).json({
                error : true , 

              })
            } else {
                await productDb.create({
                    productName : body.productName,
                    art_number : body.articleNumber,
                    isOutStock : false,
                    images: body.images,
                    video : body.video
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