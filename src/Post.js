import {FinishBut, NavButB} from './App.js'

export function PostPage() {
    return(
        <div class="screen">
            <Cards/>
            <input type="text" id="foul" placeholder="Foul"/>
            <NavButB/>
            <FinishBut/>
        </div>
    );
}

function Cards() {
    return(
        <div>
            <div class="head">Cards</div>
            <div class="row">
                <div class="column">
                    <div class="head">Yellow</div>
                    <input type="checkbox" id="gray"/>
                </div>

                <div class="column">
                    <div class="head">Red</div>
                    <input type="checkbox" id="gray"/>
                </div>
            </div>
        </div>
    );
}