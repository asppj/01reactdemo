 
 class Phone{
     get price(){
         console.log("get price");
         return this.state;
     }

     set price(val){
        console.log("set price");

         this.state=val;
     }
 }

 let s=new Phone();
s.price= 189
console.log(s.price);