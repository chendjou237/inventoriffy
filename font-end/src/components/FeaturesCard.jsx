import React from 'react'

const FeaturesCard = (props) => {
  return (
    <div className="col-auto  ">
            <div className="card bg-base-300 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={props.imageUrl}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.desc}</p>
               
              </div>
            </div>
          </div>
  )
}

export default FeaturesCard