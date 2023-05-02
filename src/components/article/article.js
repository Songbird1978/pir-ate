import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Data from '../../Data.json';
import { Link } from 'react-router-dom';
import "../../index.css";
import "../article/article.css";



function Article() {

  return (

    <Grid container className="articleGrid">

      {Data.map((Article) => {
        return (

          <Grid item xs={12} className="GridItem" key={Article.id} >

            <Card className={Article.className}>
              <CardMedia component={Article.imageUrl} className={Article.className} key={Article.imageUrl} alt={Article.imageName} style={{ scale: '1', padding: "0", left: "0", right: "0" }}></CardMedia>

              <CardContent>
                <h1 className="articleTitle" >{Article.title}</h1>
                <p className="articleDescription" >{Article.description}</p>
              </CardContent>
              <CardActions>
                <Button size="large">
                  <Link to={Article.link} className={Article.className}>
                  </Link>
                </Button>
              </CardActions>
            </Card>

          </Grid>


        );
      })}
    </Grid>

  )
}











export default Article