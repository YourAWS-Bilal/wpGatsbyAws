import React from "react"
import { graphql } from "gatsby"
import CardScroll from "../components/news-post-card/CardScroll"
import { Card } from "@mui/material"
import "../components/homepage.css"
import Layout from '../components/layout'
function BlogPost({ data }) {
  let image = data.wpPost.featuredImage.node.sourceUrl
  let content = data.wpPost.content
  // let author = data.wpPost.author.node.name
  let title = data.wpPost.author.node.title
   //for removing <p> and </p> 
   var replaceChars={ "<p>":"" , "</p>":" " };
  return (
      <Layout>
        <div style={{height:800}}>
        <Card className="card-scroll-content " variant="outlined">
        {/* <CardScroll title={title} src={image} content={content} /> */}
          {/* <CardScroll title={title} src={image} content={content.replace(/<p>|<\/p>/g,function(match) {return replaceChars[match];})}  /> */}
          <CardScroll title={title} src={image} content={content} />
        </Card>
      </div>
      </Layout>
    
  )
}

export default BlogPost
export const pageQuery = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      # query all usefull data
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
        }
      }
    }
  }
`
