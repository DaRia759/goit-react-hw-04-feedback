import React from "react";
import { NotificationMessage } from "./Notification.styled";
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
    <NotificationMessage>{message}</NotificationMessage>
);

Notification.propTypes = {
    message: PropTypes.string,
}

export default Notification;