import dateFormat from "dateformat";
export const GetItemCounts=(MergedArray)=>{
    var CategoriesArray=[]
    var unique =  [...new Set(MergedArray.map(item => item))];
    
    var Categoriesobj={}
    unique.forEach(e=>{
        var counter = 0
        MergedArray.flat(Infinity).forEach(x => {
          if(x === e){ counter++ }
         });
         Categoriesobj={
            Name: e,
            count:counter
          }
          CategoriesArray.push(Categoriesobj)
    
    })
    
 return  CategoriesArray
}

export const GetCurrDate=()=>{
  var today = new Date();
 
return  dateFormat(today, "yyyy-mm-dd") ;
}
export const Logout=()=>{
  localStorage.clear()
}