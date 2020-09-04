import React from 'react';
import reactDOM from 'react-dom';
import image from "../images/2f0.png";

function Stocksearch(){
    return (
    <div className="container-fluid">
        <div className="row justify-content-center stocksearch">
        <form>
            <div class="form-group">
            <label id="stockinput" for="InputStock">Enter Stock</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal">Submit</button>
        </form>     
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                    <img src={image} alt="stonks"/>
                </div>
            </div>
        </div>
        </div>

    </div>
    )
}

export default Stocksearch;