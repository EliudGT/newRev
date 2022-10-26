import React from 'react'
import Business from '../bussiness/Business'
import './businessList.css'

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                this.props.business.map(business=>{
                   return <Business business={business}/>
                })
                }
            </div>
        )
    }

}

export default BusinessList;