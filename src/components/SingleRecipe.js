import {useState} from "react";

const SingleRecipe = ({item}) => {
    const [color, setColor] = useState("transparent");

    return (
        <div className="render" key={item.id}
             onClick={() => setColor("lightGreen")}
             style={{backgroundColor: color}}
        >
            <img src={item.image} alt=""/>
            <h4>{item.name} / {item.id}</h4>
            <h5>Cuisine: {item.cuisine}</h5>
            <p>Cook time: {item.cookTimeMinutes}</p>
            <p>Calories per serving: {item.caloriesPerServing}</p>
            <p>Difficulty: {item.difficulty} / Prepare time: {item.prepTimeMinutes}</p>
            <p>Rating: {item.rating} / Review count: {item.reviewCount}</p>
            <p>Tags:
                {item.tags.map((tag, index) =>
                    <span key={index}> {tag}</span>
                )}
            </p>
            <div className="ingredients">
                <h5>Ingredients:</h5>
                {item.ingredients.map((ingredient, index) =>
                    <p key={index}>{ingredient}</p>
                )}
            </div>

            <div className="instruction">
                <h5>Instruction:</h5>
                {item.instructions.map((instruction, index) =>
                    <p key={index}>{instruction}</p>
                )}
            </div>

            <div className="mealType">
                <p>Meal type:
                    {item.mealType.map((type, index) =>
                        <span key={index}> {type}</span>
                    )}
                </p>
            </div>

            <p>{item.id}</p>
        </div>

    );
};

export default SingleRecipe;