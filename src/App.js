import React from 'react';
import PropTypes from 'prop-types';


const foodList = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
    rating: 4.1
  },
  {
    id: 2,
    name: "Ramen",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg",
    rating: 4.8
  },
  {
    id: 3,
    name: "Beef",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Rostas_%28ready_and_served%29.JPG",
    rating: 4.9
  },
  {
    id: 4,
    name: "Chicken",
    image: "https://www.seriouseats.com/thmb/hGmf-CklPEWYtGrsB1XIOfldngM=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2015__07__20210324-SouthernFriedChicken-Andrew-Janjigian-21-cea1fe39234844638018b15259cabdc2.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "Egg",
    image: "https://www.jessicagavin.com/wp-content/uploads/2020/09/how-to-fry-an-egg-3-1200.jpg",
    rating: 4.3
  },
  {
    id: 6,
    name: "Curry",
    image: "https://www.inspiredtaste.net/wp-content/uploads/2021/03/Chicken-Curry-Recipe-2-1200.jpg",
    rating: 4.7
  }
]

function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

// name should be announced propTypes
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return ( 
    <div className = "App" >
    {foodList.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
  </div>
  );
}

export default App;