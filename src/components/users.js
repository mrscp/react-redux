import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ListGroup} from 'react-bootstrap';
import {selectUser} from '../actions/index';
import {Card} from 'react-bootstrap';


class Users extends Component {
    render () {
        return (
            <Card>
                <Card.Header>
                    Selected user...
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ListGroup>
                            {this.props.users.map((user) => {
                                var active = false;
                                if (this.props.user && user.id == this.props.user.id) active = true;
                                
                                return (
                                    <ListGroup.Item action active={active} key={user.id} onClick={() => this.props.selectUser(user)}>{user.id}. {user.name}</ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        user: state.activeUser
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Users);