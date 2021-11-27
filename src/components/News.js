import React from "react";

const News =({news})=>{
    const newsStyle={
        color:'green',
        border:'1px solid green',
        background:'gray',
        fontSize:16
    }
    if(news === null){
        return null
    }
    return (
        <div style={newsStyle}>
            {news}
        </div>
    )
}

export default News