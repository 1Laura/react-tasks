import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {useEffect, useState} from "react";
import SingleProduct from "./components/SingleProduct";
import SingleRecipe from "./components/SingleRecipe";

function App() {
    const [recipes, setRecipes] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then(response => response.json())
            .then(data => {
                console.log(data.recipes);
                setRecipes(data.recipes);
            })
    }, [])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [])//suveiks tik viena karta

    return (
        <div className="container">
            {recipes.map((recipe, index) =>
                <SingleRecipe item={recipe} key={index}/>
            )}

            {products.map((product, index) =>
                <SingleProduct item={product} key={index}/>
            )}

        </div>
    );
}

export default App;
