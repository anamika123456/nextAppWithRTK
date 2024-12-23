const {usernamee, password} = process.env
export const connectionString =  "mongodb+srv://"+usernamee+":"+password+"@cluster0.dcugz.mongodb.net/product_db?retryWrites=true&w=majority&appName=Cluster0"