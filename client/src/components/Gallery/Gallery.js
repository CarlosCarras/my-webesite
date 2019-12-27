import React from 'react';
import './Gallery.css';

/* Format: ['image.jpg', 'title', 'description', 'href'], */
const images = [ ['pump_bracket.jpg', 'Pump Bracket', 'A pump bracket that I manufactured for my custom-built computer.', '/Projects/MountingBracket'],
                 ['some_other_image.jpg', 'Some Image', 'Some Description', ''],
                 ['some_other_image.jpg', 'Some Image', 'Some Description', ''],
                 ['some_other_image.jpg', 'Some Image', 'Some Description', ''],
                 ['some_other_image.jpg', 'Some Image', 'Some Description', ''],
                 ['some_other_image.jpg', 'Some Image', 'Some Description', ''],
                 ['some_other_image.jpg', 'Some Image', 'Some Description', ''],
                 ['some_other_image.jpg', 'Some Image', 'Some Description', '']
               ];

class Gallery extends React.Component {
    getImage(n) {
        return <img src={images[n][0]} alt={images[n][0]}/>
    }
    getInfo(n) {
        return(
            <div className="img-info">
                <div className="content">
                    <h2>{images[n][1]}</h2>
                    <p>{images[n][2]}</p>
                    {images[n][3] ?
                        <p className="yellow-text">Click for more Information.</p> : <p/>}
                </div>
            </div>
        )
    }
    getItem(n) {
        return(
            <div className="box">
                <div className="img-box">{this.getImage(n)}</div>
                {this.getInfo(n)}
            </div>
        )
    }
    getElement(n) {
        return images[n][3] ?
            <a href={images[n][3]}>{this.getItem(n)}</a> : this.getItem(n)
    }

    render() {
        return(
          <div className="gallery-page-container">
              <div className="gallery-header-container">
                  Gallery
              </div>
              <div className="gallery-container">
                  {this.getElement(0)}
                  {this.getElement(1)}
                  {this.getElement(2)}
                  {this.getElement(3)}
                  {this.getElement(4)}
                  {this.getElement(5)}
                  {this.getElement(6)}
                  {this.getElement(7)}
              </div>
              <div>
                  <div className="wave wave1"></div>
                  <div className="wave wave2"></div>
                  <div className="wave wave3"></div>
                  <div className="wave wave4"></div>
              </div>
          </div>
        )
    }
}

export default Gallery
