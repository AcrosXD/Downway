import React from 'react';
// import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'

const Movie = (props) => {
    return(
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-light">
                    {
                        props.image == null ? <img src={'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'} alt="card image" style={{ width: "100%", height: 360}} />: <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{ width: "100%", height: 360}}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Movie;