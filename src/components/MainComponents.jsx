import {Fragment} from "react";
import MainSwiper from './swiper/mainswipper';
import Features from './features/features';
import Goldtags from './goldtags/goldtags';
import Category from './category/category';
import Social from './social/social';
function MainComponents() {
    return (
        <Fragment>
            <MainSwiper/>
            <Features/>
            <Goldtags/>
            <Category/>
            <Social/>
        </Fragment>
    );
}
export default MainComponents;