import React from 'react'
import $ from 'jquery'

import "./cart.css"

const Cart = () => {

    return (
        <>
            <header className="intro">
                <h1>Shopping Cart</h1>

                <div className="action">
                </div>
            </header>

            <main>
                <button type="submit" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" id="id">
                    CART
                </button>
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="popup">
                        <h2>Your Cart</h2>
                        <div className="tableSection">
                            <table className="table addCartTable">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Members</th>
                                        <th>Event Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="https://pcsbxenia.com/xeniaLogo.png" alt="" className="image-swap" />
                                        </td>
                                        <td>
                                            <select className="sizeSelect form-control">
                                                <option value="1">1 Member</option>
                                                <option value="2">2 Members</option>
                                                <option value="n">So on.. Members</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="brandName form-control">
                                                <option value="https://pcsbxenia.com/xeniaLogo.png" data-price="190">Codestrike</option>
                                                <option value="https://pcsbxenia.com/xeniaLogo.png" data-price="200">Ninja Coding</option>
                                                <option value="https://pcsbxenia.com/xeniaLogo.png" data-price="250">Data Cup</option>
                                                <option value="https://pcsbxenia.com/xeniaLogo.png" data-price="270">Xenathon</option>
                                                <option value="https://pcsbxenia.com/xeniaLogo.png" data-price="280">Hacker House</option>
                                                <option value="https://pcsbxenia.com/xeniaLogo.png" data-price="280">IPL Auction</option>
                                                <option value="https://pcsbxenia.com/xeniaLogo.png" data-price="280">Fandom</option>
                                                <option value="https://pcsbxenia.com/xeniaLogo.png" data-price="280">Campus to Corpotare</option>
                                                <option value="https://pcsbxenia.com/xeniaLogo.png" data-price="280">Xe-Natus</option>
                                                <option value="https://pcsbxenia.com/xeniaLogo.png" data-price="280">Meta-Hunt</option>
                                            </select>
                                        </td>
                                        <td>
                                            <p>₹<span className="price">190</span></p>
                                            <span className="remove">Remove</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <a href="#" className="addmorebtn">+ Add Another Event </a>
                        <div className="paySection">
                            <ul className="paymethods">
                                <li><img src="https://pcsbxenia.com/xeniaLogo.png" alt="" /></li>
                                <li><img src="https://pcsbxenia.com/xeniaLogo.png" alt="" /></li>
                                <li><img src="https://pcsbxenia.com/xeniaLogo.png" alt="" /></li>
                                <li><img src="https://pcsbxenia.com/xeniaLogo.png" alt="" /></li>
                                <li><img src="https://pcsbxenia.com/xeniaLogo.png" alt="" /></li>
                                <li><img src="https://pcsbxenia.com/xeniaLogo.png" alt="" /></li>
                                <li><img src="https://pcsbxenia.com/xeniaLogo.png" alt="" /></li>
                                <li><img src="https://pcsbxenia.com/xeniaLogo.png" alt="" /></li>
                            </ul>
                            <a href="#" className="btn btn-primary btn-lg checkoutbtn">Checkout</a>
                            <p className="pay-resources">We accept all types of Payment..Credit/Debit Card, UPI</p>
                        </div>
                        <div className="carroselSection">
                            <h3>Additional products that you might like</h3>
                            <div className="carrosalinner">
                                <div className="carrosalthumb">
                                    <div className="carrosalblock">
                                        <div className="imgSection">
                                            <img src="https://pcsbxenia.com/xeniaLogo.png" alt="" />
                                        </div>
                                        <div className="carrosaltextSection">
                                            <h4>Codestrike</h4>
                                            <p className="price"><span className="orignal">₹390</span><span className="discount" >₹360</span></p>
                                            <button className="add-product-button" data-discount="360" datat-select="EVENTS ADD">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carrosalthumb">
                                    <div className="carrosalblock">
                                        <div className="imgSection">
                                            <img src="https://pcsbxenia.com/xeniaLogo.png" alt="" />
                                        </div>
                                        <div className="carrosaltextSection">
                                            <h4>Ninja Coding</h4>
                                            <p className="price"><span className="orignal">₹220</span><span className="discount">₹190</span></p>
                                            <button className="add-product-button" data-discount="190" data-select="EVENT">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carrosalthumb">
                                    <div className="carrosalblock">
                                        <div className="imgSection">
                                            <img src="https://pcsbxenia.com/xeniaLogo.png" alt="" />
                                        </div>
                                        <div className="carrosaltextSection">
                                            <h4>Data Cup</h4>
                                            <p className="price"><span className="orignal">₹200</span><span className="discount">₹190</span></p>
                                            <button className="add-product-button" data-discount="190" data-select="EVENT n">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carrosalthumb">
                                    <div className="carrosalblock">
                                        <div className="imgSection">
                                            <img src="https://pcsbxenia.com/xeniaLogo.png" alt="" />
                                        </div>
                                        <div className="carrosaltextSection">
                                            <h4>Xenathon</h4>
                                            <p className="price"><span className="orignal">₹390</span><span className="discount" >₹360</span></p>
                                            <button className="add-product-button" data-discount="360" datat-select="EVENTS ADD">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carrosalthumb">
                                    <div className="carrosalblock">
                                        <div className="imgSection">
                                            <img src="https://pcsbxenia.com/xeniaLogo.png" alt="" />
                                        </div>
                                        <div className="carrosaltextSection">
                                            <h4>Hacker House</h4>
                                            <p className="price"><span className="orignal">₹390</span><span className="discount" >₹360</span></p>
                                            <button className="add-product-button" data-discount="360" datat-select="EVENTS ADD">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carrosalthumb">
                                    <div className="carrosalblock">
                                        <div className="imgSection">
                                            <img src="https://pcsbxenia.com/xeniaLogo.png" alt="" />
                                        </div>
                                        <div className="carrosaltextSection">
                                            <h4>IPL Auction</h4>
                                            <p className="price"><span className="orignal">₹390</span><span className="discount" >₹360</span></p>
                                            <button className="add-product-button" data-discount="360" datat-select="EVENTS ADD">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carrosalthumb">
                                    <div className="carrosalblock">
                                        <div className="imgSection">
                                            <img src="https://pcsbxenia.com/xeniaLogo.png" alt="" />
                                        </div>
                                        <div className="carrosaltextSection">
                                            <h4>Fandom</h4>
                                            <p className="price"><span className="orignal">₹390</span><span className="discount" >₹360</span></p>
                                            <button className="add-product-button" data-discount="360" datat-select="EVENTS ADD">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carrosalthumb">
                                    <div className="carrosalblock">
                                        <div className="imgSection">
                                            <img src="https://pcsbxenia.com/xeniaLogo.png" alt="" />
                                        </div>
                                        <div className="carrosaltextSection">
                                            <h4>Campus to Corporate</h4>
                                            <p className="price"><span className="orignal">₹390</span><span className="discount" >₹360</span></p>
                                            <button className="add-product-button" data-discount="360" datat-select="EVENTS ADD">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carrosalthumb">
                                    <div className="carrosalblock">
                                        <div className="imgSection">
                                            <img src="https://pcsbxenia.com/xeniaLogo.png" alt="" />
                                        </div>
                                        <div className="carrosaltextSection">
                                            <h4>Xe-Natus</h4>
                                            <p className="price"><span className="orignal">₹390</span><span className="discount" >₹360</span></p>
                                            <button className="add-product-button" data-discount="360" datat-select="EVENTS ADD">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carrosalthumb">
                                    <div className="carrosalblock">
                                        <div className="imgSection">
                                            <img src="https://pcsbxenia.com/xeniaLogo.png" alt="" />
                                        </div>
                                        <div className="carrosaltextSection">
                                            <h4>Meta-Hunt</h4>
                                            <p className="price"><span className="orignal">₹390</span><span className="discount" >₹360</span></p>
                                            <button className="add-product-button" data-discount="360" datat-select="EVENTS ADD">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-default closemodal" data-dismiss="modal">&times;</button>
                    </div>
                </div>
            </main>

            <footer className="credit">

                <video width="1400" height="1200" autoplay muted>
                    <source src="https://www.metfx.io/assets/images/video.mp4" type="video/mp4" />
                    <source src="https://www.metfx.io/assets/images/video.mp4" type="video/ogg" />
                    <p>Your browser does not support the video tag.</p>
                </video>

                <video width="1400" height="800" autoplay muted>
                    <source src="https://www.metfx.io/assets/images/metfx%203.mp4" type="video/mp4" />
                    <source src="https://www.metfx.io/assets/images/metfx%203.mp4" type="video/ogg" />
                    <p>Your browser does not support the video tag.</p>
                </video>
            </footer>

            {
                $(document).ready(function () {


                    $('.addmorebtn').on('click', function (e) {
                        e.preventDefault();
                        var content = $('<tr> <td> <img src="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" alt="" class="image-swap"/> </td> <td> <select class="sizeSelect form-control"> <option value="1 Member">1 Member</option> <option value="2 Members">2 Members</option> <option value="N Members">N Members</option> </select> </td> <td> <select class="brandName form-control"> <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="190">Codestrike</option> <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="290">Ninja Coding</option> <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="250">Data Cup</option> <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="270">Xenathon</option> <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="280">Hacker House</option>  <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="270">IPL Auction</option>  <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="270">Fandom</option>  <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="270">Campus to Corporate</option>  <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="270">Xe-Natus</option>  <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="270">Meta-Hunt</option> </select> </td> <td> <p>₹<span class="price">190</span></p> <span class="remove">Remove</span> </td> </tr>');
                        $('.addCartTable').append(content);
                        $('.remove').show();
                    });
                    /* Code by Abhishek */

                    $(document).on('click', '.remove', function (e) {
                        console.log($('.addCartTable').find('tr').length);
                        $(this).parents('tr').remove();
                        if (($('.addCartTable').find('tr').length - 1) == 1) {
                            console.log('pass');
                            $('.remove').hide();
                            // event.stopPropagation();
                        }
                    });

                    $(document).on('change', '.brandName', function () {
                        console.log($(this).val());
                        $(this).parents('tr').find('img.image-swap').attr("src", $(this).val());
                        $(this).parents('tr').find('.price').html($(this).find('option:selected').data('price'));
                    });

                    $('.add-product-button').on('click', function (e) {
                        e.preventDefault();
                        console.log($(this).data('discount'));
                        var price = $(this).data('discount');
                        var content = $('<tr> <td> <img src="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" alt="" class="image-swap"/> </td> <td> <select class="sizeSelect form-control"> <option value="1 Member">1 Member</option> <option value="2 Members">2 Members</option> <option value="N Members">N Members</option></select> </td> <td> <select class="brandName form-control"> <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="199" data-selected="Codestrike">Codestrike</option> <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="290" data-selected="Codestrike">Codestrike</option> <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="259" data-selected="EVENT">EVENT 2</option> <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="279"  data-selected="EVENT3">EVENT 3</option> <option value="https://pcsbxenia.com/static/media/csi.aaeac4e8.png" data-price="280" data-selected="EVENT 4">EVENT 4</option> </select> </td> <td> <p>₹<span class="price">' + price + '</span></p> <span class="remove">Remove</span> </td> </tr>');
                        $('.addCartTable').append(content);
                        $('.remove').show();
                        $('.id_100 option')
                            .removeAttr('select')
                            .filter('[data-selected=' + $(this).data('select') + ']')
                            .attr('selected', true);
                    });
                    $(document, '#tp_result').on("submit", ".cart", function (e) {
                        e.preventDefault(e);
                        $('#id').trigger('click');
                    });
                })
            }





        </>
    )
}

export default Cart