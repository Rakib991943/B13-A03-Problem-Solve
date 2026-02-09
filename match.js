const products=[
    {id:1,name:"xiami Phone", price:19000},
    {id:2,name:"iphone Phone", price:19000},
    {id:3,name:"mac book air Phone", price:19000},
    {id:4,name:"lenevo yoga laptop 2025", price:19000},
    {id:5,name:"samsung phone note 7", price:19000},
    {id:6,name:"Nokia old age phone gone  ", price:19000},
    {id:7,name:"phone one plus", price:19000},
]


function matchProducts(products,search){
    let matchedPhone=[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
        matchedPhone.push(product);
        }
    }

    return matchedPhone;

}

const result = matchProducts(products, 'phone')
console.log(result);