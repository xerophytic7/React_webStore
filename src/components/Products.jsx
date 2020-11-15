
import "./Products.css";
// import image from '../img_resources/imgs';

const Products = props => {

    // const [products, setProducts] = useState(
    const products = 
        [{
            id: 1,
            name: "Lake",
            price: 2.99,
            src: './img_resources/lake.jpg'
        },
        {
            id: 2,
            name: "Mountain",
            price: 2.99,
            src: "./img_resources/mountain.jpg"
        },
        {
            id: 3,
            name: "Woods",
            price: 2.99,
            src: "./img_resources/woods.jpg"
        },
        {
            id: 4,
            name: "Beach",
            price: 2.99,
            src: "./img_resources/beach.jpg"
        },
        {
            id: 5,
            name: "Dunes",
            price: 2.99,
            src: "./img_resources/dunes.png"
        },
        {
            id: 6,
            name: "Mesa",
            price: 2.99,
            src: "./img_resources/mesa.jpg"
        },
        {
            id: 7,
            name: "Stream",
            price: 2.99,
            src: "./img_resources/stream.png"
        },];
      //);
      
    //   return(
    //     <div>
    //         <img src="./images/beach.jpg" alt="image"/>
    //         {products.map(product => {
    //             return <img src="./img_resources/stream.png" key={product.id} />
    //         })}
    //     </div>
    //   );
    return (
        <div>
                {products.map(product =>{
                    return <div key={product.id}> 
                        <div id="partners" >
                        <div className="logo-image">
                            <img src={product.src} key={product.id} className="products"/>
                            <div>{product.name}</div>
                            <div>{`$${product.price}B`}</div>
                            <button onClick={() => {props.updateCart(product)}}>Add To Cart</button>
                            <p></p>
                        </div>
                        </div>
                    
                    </div>
                })}
        </div>
           
    );
};

export default Products;