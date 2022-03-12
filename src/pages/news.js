import React from "react"
// import NavBar from "../components/global-components/navbar/index";
import { graphql, Link } from "gatsby"
import { Card } from "@mui/material"
import Layout from '../components/layout'
import "../components/news.css"
function News({ data }) {
  console.log("data >>", data)
  return (
    <Layout>
      <div className="container jumbotron">
        {/* <Card className="card-scroll-content " variant="outlined">
          <BackToTop />
        </Card> */}
        <Card className="card-scroll-content ">
          <h1 className="display-4">Aktuella artiklar om hemstäd</h1>
          <p className="lead">
            Här hittar du aktuella artiklar för dig som är intresserad av att
            förstå städbranschen. Läs det senaste som påverkar dig som konsument
            och privatperson och få bra tips som gör det enklare att komma
            igång.
          </p>
          {data.allWpPost.edges.map(val => {
            console.log(val)
            return (
              <Link to={`/news/${val.node.slug}`}>
                <Card className="news-posts">
                  <div className="news-img-left">
                    <img
                      style={{ width: "100%" }}
                      src={val.node.featuredImage.node.sourceUrl}
                      alt=""
                    ></img>
                  </div>
                  <div className="news-right">
                    <h1>{val.node.title}</h1>
                    <p>
                      {/* {val.node.featuredImage.node.description} */}
                    </p>
                  </div>
                </Card>
                <br />
              </Link>
            )
          })}
        </Card>
      </div>
    </Layout>
  )
}
export default News
export const query = graphql`
  query {
    allWpPost {
      edges {
        node {
          title
          slug
          featuredImage {
            node {
              sourceUrl
              description
            }
          }
          content
        }
      }
    }
  }
`
