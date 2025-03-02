import { NavButN, NavButB } from './App.js'
import { CardBox, TextBox } from './Functions.js';

//Main exported page with all elements
//All imported elements and props are dictated on thier home page
export function PostPage() {
    return (
        <div class="screen">
            <div class="head"> POST GAME PAGE</div>
            <Cards />
            <TextBox
                vlair="Fouls"
                tooltip="Fouls"
            />

            <div class="row">
                <div class="navButText">
                    <NavButB last={4} />
                    End Game
                </div>
                <div class="navButText">
                    <NavButN next={7} />
                    Code Generation
                </div>
            </div>
        </div>
    );
}

//Element to keep track of Cards
function Cards() {
    return (
        <div>
            <div class="head">Cards</div>
            <CardBox
                vlair="Cards" />
        </div>
    );
}