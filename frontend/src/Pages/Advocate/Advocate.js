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
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5bfztzwzNRsOmLWBvw4_MJ4ATEh0JianFQ&usqp=CAU",
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
