import {FinishBut, NavButB} from './App.js'
import { CardBox, TextBox } from './Functions.js';

//Main exported page with all elements
//All imported elements and props are dictated on thier home page
export function PostPage() {
    return(
        <div class="screen">
            <div class="head"> POST GAME PAGE</div>
            <Cards/>
            <TextBox
            vlair="foul"
            tooltip="Fouls"
            />
            <NavButB last={4}/>
            <FinishBut next={6}/>
        </div>
    );
}

//Element to keep track of Cards
function Cards() {
    return(
        <div>
            <div class="head">Cards</div>
            <CardBox
            vlair="Cards"/>
        </div>
    );
}