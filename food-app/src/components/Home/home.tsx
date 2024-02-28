import React from "react";
import Box from "../Box/Box";
import NavigateBar from "../NavigateBar/navigateBar";
import './home.css';

const FoodApp: React.FC= () =>{
    return (
    <>
        <NavigateBar></NavigateBar>
        <div className="Grid">
            <Box label="banana" imgString="https://i5.walmartimages.com/seo/Fresh-Banana-Fruit-Each_5939a6fa-a0d6-431c-88c6-b4f21608e4be.f7cd0cc487761d74c69b7731493c1581.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
            altString="banana" description="Yellow"></Box>
             <Box label="banana" imgString="https://i5.walmartimages.com/seo/Fresh-Banana-Fruit-Each_5939a6fa-a0d6-431c-88c6-b4f21608e4be.f7cd0cc487761d74c69b7731493c1581.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
            altString="banana" description="Yellow"></Box>
             <Box label="banana" imgString="https://i5.walmartimages.com/seo/Fresh-Banana-Fruit-Each_5939a6fa-a0d6-431c-88c6-b4f21608e4be.f7cd0cc487761d74c69b7731493c1581.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
            altString="banana" description="Yellow"></Box>
             <Box label="banana" imgString="https://i5.walmartimages.com/seo/Fresh-Banana-Fruit-Each_5939a6fa-a0d6-431c-88c6-b4f21608e4be.f7cd0cc487761d74c69b7731493c1581.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
            altString="banana" description="Yellow"></Box>
         </div>
         <div className="ADD">
            <button className="AddButton">
                +
            </button>
         </div>
    </>
    );
     
};

export default FoodApp;