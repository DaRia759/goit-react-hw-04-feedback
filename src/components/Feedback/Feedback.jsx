import React from "react";
import PropTypes from 'prop-types';
import { Button } from './Feedback.styled'; 


const Feedback = ({ ratings, onLeaveFeedback }) => {
    return (
        <div>
            {ratings.map(ratingItem => (
                <Button
                    type='button'
                    key={ratingItem}
                    onClick={() => onLeaveFeedback(ratingItem)}
                >
                    {ratingItem}
                </Button>
            ))}
        </div>
    );
};

Feedback.propTypes = {
    ratings: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
};

export default Feedback;