import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card} from 'react-bootstrap';


class UserDetail extends Component {
    userContent = () => {
        if (this.props.user == null){
            return (
                <div>Select a user..</div>
            )
        }else{
            return (
                <div>
                    {this.props.user.name}
                    <hr />
                    <p>Age: {this.props.user.age}</p>
                    <p>Gender: {this.props.user.gender}</p>
                </div>
            )
        }
    }
    render () {
        return (
            <Card>
                <Card.Header>
                    Selected user...
                </Card.Header>

                <Card.Body>
                    <Card.Text>
                        {this.userContent()}
                    </Card.Text>
                </Card.Body>
            </Card>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);