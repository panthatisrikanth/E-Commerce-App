import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import Layout from '../../component/Layout';
/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout>
      <Jumbotron className="text-center" style={{margin: '5rem' ,background:'white'}}>
        Welcome
      </Jumbotron>
    </Layout>
   )

 }

export default Home