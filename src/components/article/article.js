import React from 'react';
import Card from '@mui/material/Card';
//import CardMedia from '@mui/material/CardMedia';
//import CardContent from '@mui/material/CardContent';
//import CardActions from '@mui/material/CardActions';
//import Button from '@mui/material/Button';
//import CardActions from '@mui/material/CardActions';
//import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import data from '../../Data.json';
import { Link } from 'react-router-dom';
import "../../index.css";
import "../article/article.css";



function Article() {

  return (

    <Grid container className="articleGrid" spacing={3}>

      {data.map((article) => {
        return (

          <Grid item xs={article.xs} sm={article.sm} className={article.className} key={article.id} >
            <Link to={article.link} className="articleLink">

              <Card id="articleCard" >

                <div className="articleImage">
                  <img src={article.image} className="articleImage" key={article.image} alt={article.imageName} style={{ scale: '1', padding: "0", left: "0", right: "0" }}></img>
                </div>
                <div className="articleTitle">
                  <h1 className="articleTitle" >{article.title}</h1>
                </div>
                <div className="articleDescription">
                  <p className="articleDescription" >{article.description}</p>
                </div>
                <button className="articleBtn" size="large">
                  Read More
                </button>

              </Card>
            </Link>

          </Grid>


        )
      })}

    </Grid>

  )
}











export default Article