import React from 'react';
import PostItem from './PostItem';
const image1 = require("../assets/IMG1.JPG");
const image2 = require("../assets/IMG2.JPG");
const image3 = require("../assets/IMG3.JPG");
const image4 = require("../assets/IMG4.JPG");
const image5 = require("../assets/IMG5.JPG");
const image6 = require("../assets/IMG6.JPG");

class PostGrid extends React.Component {
    MyImages () {
        const images = [image1,image2,image3,image4,image5,image6];
        return images.map(item => {
            return <PostItem image={item}/>
        });

    }
    render() {
        return (
            <div>
              {this.MyImages()} 
            </div>
        )
    }
}

export default PostGrid;