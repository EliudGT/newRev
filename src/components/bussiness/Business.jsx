import React from "react";
import '../bussiness/business.css'




class Business extends React.Component {
  render(){
    return(
    <div className="Business">
  <div class="image-container">
    <img src={this.props.imageSrc} alt=''/>
  </div>
  <h2>{this.props.business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{this.props.business.address}</p>
      <p>Bordertown</p>
      <p>NY 10101</p>
    </div>
    <div className="Business-reviews">
      <h3>{this.props.business.category}</h3>
      <h3 className="rating">{this.props.business.category}</h3>
      <p>{this.props.business.reviewCount} reviews</p>
    </div>
  </div>
</div>
  )}
}

export default Business;