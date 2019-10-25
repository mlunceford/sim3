import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {} from 'react-router-dom'
class Nav extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        if(this.props.location.pathname === '/'){
            return null;
        } else {
            return(
                <div className="Nav">
                    <div className="navBox">
                        <div className="logo">logopic</div>
                        <Link to= '/dashboard'><div className="home btn">Home</div></Link>
                        <Link to='./post/:postid'><div className="newPost btn">New Post</div></Link>

                    </div>
                    <Link to='/'><div className="logout btn">Logout</div></Link>
                </div>
            )

        }
    }
}
export default withRouter(Nav);