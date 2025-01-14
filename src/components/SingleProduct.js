const SingleProduct = ({item}) => {
    return (

        <div className="render" key={item.id}>
            <img src={item.image} alt=""/>
            <h4>{item.title}</h4>
            <h5>{item.category}</h5>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
            <p>{item.rating.count} <span>/ {item.rating.rate}</span></p>
            <p>{item.id}</p>
        </div>

    );
};

export default SingleProduct;