import React from 'react';
import styles from './TopBarButton.module.css'

type TopBarButtonProps = {
    icon: React.ReactNode;
    label?: string;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const TopBarButton: React.FC<TopBarButtonProps> = (props) => (
    <button type="button" onClick={props.clickHandler}>
        {props.icon}
        {props.label !== undefined && props.label}
    </button>
)

export default TopBarButton