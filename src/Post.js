import {FinishBut, NavButB} from './App.js'
import { CardBox } from './Functions.js';

export function PostPage() {
    return(
        <div class="screen">
            <Cards/>
            <input type="text" id="foul" placeholder="Foul"/>
            <NavButB last={4}/>
            <FinishBut next={6}/>
        </div>
    );
}

function Cards() {
    return(
        <div>
            <div class="head">Cards</div>
            <CardBox
            vlair="Cards"/>
        </div>
    );
}