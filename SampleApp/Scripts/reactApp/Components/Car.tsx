import * as React from 'react';
import { Car } from "../models";

export interface ICarProps {
    car:Car
}

export const Cars: React.StatelessComponent<ICarProps> = ({ car }) => {
    return (
        <div>
            This is a {car.make} {car.model}
        </div>
    );
}