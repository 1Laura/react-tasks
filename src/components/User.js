const User = (props) => {
    return (

        <div className="render" style={{backgroundColor: props.color}}>
            <p>{props.colorName}</p>
            <div className="families-container">
                {props.colorFamilies.map(familiesColor =>
                    <div className="colors-block-families" style={{backgroundColor: familiesColor}}></div>)}
            </div>
        </div>

    );
};

export default User;