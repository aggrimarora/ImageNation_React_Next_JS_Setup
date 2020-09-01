const Card = (props) => (
    
    <div className="card">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <button class="btn btn-primary">Go Somewhere</button>
        </div>
        <style jsx>{`
        .card {
          background-color: #eeeeee;
          padding: 10px;
          margin: 10px;
        }
      `}</style>
    </div>
);

export default Card;