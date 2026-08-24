import React from 'react'

export default function ProductSection(props) {

  const Card = ({ image, name, price, id, category }) => {
    console.log(image)
    return <div style={{
      height: "400px",
      height: "200px",

    }}>
      <img src={image} alt={name} height={200} width={250} />
      <p>Name : {name}</p>
      <p>Price : {price}</p>
      <p>ID : {id}</p>
      <p>Catgory : {category}</p>
    </div>;
  }

  return (
    <div>
      <h1>Products Type : {props.type} </h1>
      <br />
      <br />

      <div className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          marginBottom: "200px"
        }}>
        {
          props.data.map((prod) => {
            return <Card key={prod.id}
              name={prod.name}
              image={prod.image}
              id={prod.id}
              category={prod.category}
              price={prod.price} />
          })
        }
      </div>
    </div>
  )
}
