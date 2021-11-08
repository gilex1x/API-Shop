const productsList=[{
        productId:"1",
        nombre:'Collar Naruto',
        price:8000
    },
    {
        productId:"2",    
        nombre:'Collar AttackOnTitan',
        price:8000
    },
    {
        productId:"3",    
        nombre:'Collar Bleach',
        price:8000
    }
]

class ProductsServices{

    constructor(){
        this.products=[];//Esto después se vuelve una DB
        this.setProducts();
    }

    setProducts(){
        this.products=productsList;
    }
    create(data){
        const newProduct= {
            productId:(this.products.length +1 ).toString(),
            ...data
        };
        this,this.products.push(newProduct);
        return {
            newProduct,
            message:"Producto creadocon exito"};
    }

    find(){
        return this.products;
    }

    findOne(id){
        return this.products.find(item=>item.productId === id)
    }

    update(id,changes){
        const index= this.products.findIndex(item=>item.productId === id);
        if(index===-1){
            throw new Error('Porducto no encontrado, rectifica los datos');
        }
        this.products[index]= {
            ...this.products[index],
            ...changes};
        return this.products[index];
    }

    delete(id){
        const index= this.products.findIndex(item=>item.productId === id);
        if(index===-1){
            throw new Error('Porducto no encontrado, rectifica los datos');
        }
        this.products.splice(index,1);
        return `El producto ${id} se ha eliminado con exito`;
    }
}

module.exports = ProductsServices;