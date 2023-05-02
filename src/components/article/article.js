import React from 'react';
import Card from '@mui/material/Card';
//import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
//import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import data from '../../Data.json';
import { Link } from 'react-router-dom';
import "../../index.css";
import "../article/article.css";



function Article() {

  return (

    <Grid container className="articleGrid" spacing={6}>
      <div>
        <title className="pageTitle"> Articles</title>
      </div>

      {data.map((article) => {
        return (

          <Grid item xs={article.xs} sm={article.sm} className="GridItem" key={article.id} >

            <Card id="card" className={article.className}>

              <CardContent>
              <div className="imageDiv">
                <img src={article.image} className={article.className} key={article.image} alt={article.imageName} style={{ scale: '1', padding: "0", left: "0", right: "0" }}></img>
                </div>
                <div className="titleDiv">
                <h1 className="articleTitle" >{article.title}</h1>
                </div>
                <div className="infoDiv">
                <p className="articleDescription" >{article.description}</p>
                </div>
               
              </CardContent>
              <CardActions>
                <Link to={article.link} className={article.className}>
                  <button className="cardBtn" size="large">
                    Read More
                  </button>
                </Link>
              </CardActions>
            </Card>

          </Grid>


        );
      })}
    </Grid>

  )
}











export default Article