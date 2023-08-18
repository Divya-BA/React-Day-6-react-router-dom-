import React from 'react'

function Card(props) {
  return (
    <>
    <div className="card-group">
      <div className="card">
        <img src={props.link} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <a className="a" target="_blank" href={props.more}>Learn More</a>
        </div>
        {/* <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default Card