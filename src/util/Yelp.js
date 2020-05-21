const apiKey = 'yRQTOFIr_spxcx60P8_SKHJazRULtPrrrbCgocq2BWEd0EENDBU0kc97NRTxUm5rtFRFJacqIUzNjo6WD4lVodLGhJAHvK50sQKlp9o59D1E7IlW3GxbP7uUrj1NWnYx';

const Yelp={
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers:{
                 Authorization: `Bearer ${apiKey}`
            }
        })
        .then(Response=>{
            return Response.json()
        })
        .then(jsonResponse=>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business=>{
                    return{
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
}

export default Yelp;
