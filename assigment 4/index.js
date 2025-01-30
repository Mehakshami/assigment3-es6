// Inheritance
// example 1
class categary{
    dryFruit(){
        return "Almond is dry fruit"
    }
    pomeFruit(){
        return "orange is pome fruit"
    }
}
class fruits extends categary{
    constructor(){
        super()
        console.log("constructor")
    }
    getfruit(){
        return "you got orange";
    }
}
    let f1= new fruits;
    let c1= new categary;
    console.log (c1.dryFruit())
    console.log(f1 .getfruit());


    // lexcical scope for this
    // lexical scope of  this variableis that function
    // example 1
    let data = {
        list :"friend",
        names:["fariya" ,"sheena","nasreen"],
        getFriends :function()
        {
            this.names.map((item)=>{
        console.log(this.list,item)
        })
    }
      }
    
      data.getFriends()