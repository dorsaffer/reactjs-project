import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                <CardBody>
                    <CardTitle>{this.props.selectedDish.name}</CardTitle>
                    <CardText>{this.props.selectedDish.description}</CardText>
                </CardBody>
            </Card>
        );

    }

    renderComments(arr) {
        if (arr != null)
            return (
                arr.map(com => {
                    return (
                        <ul className="list-unstyled">
                            <li>{com.comment}</li>
                            <li>---{com.author}{com.date}</li>
                        </ul>

                    );
                })
            )
        else
            return (<div></div>);
    }

    render() {


        if (this.props.selectedDish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1" >
                        <h4>Comments</h4>
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>

            );
        else
            return (
                <div></div>
            );

    }

}

export default DishDetail;