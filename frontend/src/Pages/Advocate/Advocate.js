import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Advocate.css";
const data = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone_number: 123456789,
        address: "New York",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAVOB6gqo98SBtYF3oHVBPJ6uyYr5SEUoQg&usqp=CAU",
        exp: '2 years'
    },
    {
        id: 2,
        name: "Alice Smith",
        email: "alice.smith@example.com",
        phone_number: 987654321,
        address: "Los Angeles",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGlhF75m3aCnpqIH1B_rhLFu7jDLWVNW7Zg&usqp=CAU",
        exp: '3 years'
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        phone_number: 555555555,
        address: "Chicago",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxlklmmBohNYCftqG6BtAYQtyxb6PUQNXtA&usqp=CAU",
        exp: '4 years'
    },
    {
        id: 4,
        name: "Eve Wilson",
        email: "eve.wilson@example.com",
        phone_number: 777777777,
        address: "San Francisco",
        img_url: "data:image/jpeg;base64,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",
        exp: '5 years'
    },
];
// Rest of the code remains the same


const Featured = () => {
    //   const [destination, setDestination] = useState("");
    const navigate = useNavigate();
    const slider = useRef(null);

    const handleClick = (name) => {
        // setDestination(name);
        // You can navigate to a specific page or take any other action when a featured item is clicked.
    };

    return (
        <div className="container ">
            <div className='feature-cont'>
                {data.map((item) => (
                    <div className="featuredItem" key={item.id} onClick={() => handleClick(item.name)}>
                        <img src={item.img_url} alt={`Featured ${item.name}`} className="featuredImg" />
                        <div className="featureTitles">
                            <h1>{item.name}</h1>
                            <h2>{item.email}</h2>
                            <h2>{item.phone_number}</h2>
                            <h2>{item.exp}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;
