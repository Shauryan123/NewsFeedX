import React, { Component } from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card" style ={{
                    backgroundColor: props.mode === 'light' ? 'white' : 'black',
                    color: props.mode === 'light' ? 'black' : 'white',
                    border: props.mode === 'light' ? "" : "2px solid white"
                }}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source}
                        </span>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body" style={{
                        backgroundColor : props.mode === 'dark' ? 'black' : 'white',
                        color: props.mode === 'light' ? 'black' : 'white'}}>
                            {/* {console.log(this.props.mode + 'heyhehehe')} */}
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${props.mode === 'light' ? 'dark' : 'light'}`}>Read More</a>
                    </div>
                </div>
            </div>
        )

}

export default NewsItem
