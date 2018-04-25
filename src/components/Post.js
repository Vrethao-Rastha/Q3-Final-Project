import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removePosts } from '../redux/actions'
import { ListGroupItem,
         Button,
         Card,
         CardText,
         CardBody,
         CardTitle,
 } from 'reactstrap'

 let heart = <i class="fa fa-gratipay" aria-hidden="true"></i>
 let like = <i class="fa fa-hand-spock-o" aria-hidden="true"></i>
 let comment = <i class="fa fa-comments" aria-hidden="true"></i>


 class Post extends Component {

   getRandom = (min, max) => {
     return Math.floor(Math.random() * (max - min)) + min;
   }
    render(){
      console.log('props:', this.props.post)
      let theX = <Button className="btn btn-secondary fa fa-times pull-right"
        value={this.props.post.id}
        onClick={() => removePosts(this.props.post.id)}
        ></Button>
        if(this.props.post){
          return(
               <div className="clearfix">


                   <ListGroupItem style={{ marginBottom: "20px"}}> { this.props.post.content } { theX } <hr/>{heart}  {this.getRandom(3,20)}  {like} {this.getRandom(3,20)}  {comment} {this.getRandom(3,20)}</ListGroupItem>
               </div>

          )
        }else {
          return(
            <div>Loading...</div>
          )
        }

 }
}
 const mapDispatchToProps = dispatch =>
  bindActionCreators({
    removePosts
  }, dispatch)


export default connect(null, mapDispatchToProps)(Post)
