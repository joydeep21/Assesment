import React, { useState } from "react";
import StarRatings from 'react-star-ratings';
const Rating = ({ selectedRating }) => {
    const [rating, setRating] = useState(0);
    const [ratingAny, setRatingAny] = useState(0);
    const handleChange = (e) => {
        setRatingAny(0);
        setRating(e.target.value);
        selectedRating(e.target.value)

    }
    const handleChangeAny = (e) => {

        setRating(0);
        selectedRating(11)


    }
    return (
        <div className="p-1">
            <label className="label-start" key={0}>
                <input
                    type="checkbox"
                    name="ratingAny"
                    value={ratingAny}
                    onChange={handleChangeAny}

                />
                Any Rating
            </label>
            {Array.from({ length: 10 }, (_, index) => (

                <div key={index + 1}>
                    <label className="label-start">
                        <input
                            type="checkbox"
                            name="rating"
                            value={index + 1}
                            onChange={handleChange}
                            checked={rating >= index + 1}
                        />
                        <StarRatings starDimension="20px"
                            starSpacing="1px" numberOfStars={10} rating={index + 1} />
                    </label>
                </div>
            ))
            }

        </div>
    );
};

export default Rating;