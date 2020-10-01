import React, { Component } from 'react';
import { useParams } from "react-router";
import { match } from "react-router-dom";
class NewsDetail extends Component {
    render() {
        return (
            <div>
                <header className="masthead tintuc mb-2">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5 tieude">Trang chi tiết tin</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* begin tin tuc */}
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <img src="https://via.placeholder.com/1900x700" className="img-fluid " alt="for react beginer" />
                        <p className="lead"><b>Jumbo helper text</b></p>
                        <hr className="my-2" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas suscipit, culpa voluptatibus quos
                        mollitia quisquam hic blanditiis eaque debitis? Sit quas possimus consectetur? Eveniet nesciunt magnam
              quos commodi cumque suscipit.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas suscipit, culpa voluptatibus quos
                        mollitia quisquam hic blanditiis eaque debitis? Sit quas possimus consectetur? Eveniet nesciunt magnam
              quos commodi cumque suscipit.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas suscipit, culpa voluptatibus quos
                        mollitia quisquam hic blanditiis eaque debitis? Sit quas possimus consectetur? Eveniet nesciunt magnam
              quos commodi cumque suscipit.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas suscipit, culpa voluptatibus quos
                        mollitia quisquam hic blanditiis eaque debitis? Sit quas possimus consectetur? Eveniet nesciunt magnam
              quos commodi cumque suscipit.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="card bg-primary ">
                        <div className="card-body">
                            <h4 className="card-title text-center">Tin liên quan</h4>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-12">
                            <div className="card-deck mb-2">
                                <div className="card card-block">
                                    <a href="/detail"><img className="card-img-top" src="https://via.placeholder.com/500x200" alt="for react beginer" /></a>
                                    <div className="card-body">
                                        <a href="/detail"><h4 className="card-title">Title</h4></a>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident optio facilis dignissimos qui aliquam blanditiis ex quaerat fugiat libero tenetur ducimus quia nisi, expedita tempora ullam voluptas maiores cum?</p>
                                    </div>
                                </div>
                                <div className="card card-block">
                                    <a href="/detail"><img className="card-img-top" src="https://via.placeholder.com/500x200" alt="for react beginer" /></a>
                                    <div className="card-body">
                                        <a href="/detail"><h4 className="card-title">Title</h4></a>
                                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolore amet. Sunt officiis quam tempore obcaecati, et nam culpa dignissimos facere magnam harum. Ullam nobis quo et veritatis dolor!</p>
                                    </div>
                                </div>
                                <div className="card card-block">
                                    <a href="/detail"><img className="card-img-top" src="https://via.placeholder.com/500x200" alt="for react beginer" /></a>
                                    <div className="card-body">
                                        <a href="/detail"><h4 className="card-title">Title</h4></a>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident optio facilis dignissimos qui aliquam blanditiis ex quaerat fugiat libero tenetur ducimus quia nisi, expedita tempora ullam voluptas maiores cum?</p>
                                    </div>
                                </div>
                                <div className="card card-block">
                                    <a href="/detail"><img className="card-img-top" src="https://via.placeholder.com/500x200" alt="for react beginer" /></a>
                                    <div className="card-body">
                                        <a href="/detail"><h4 className="card-title">Title</h4></a>
                                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolore amet. Sunt officiis quam tempore obcaecati, et nam culpa dignissimos facere magnam harum. Ullam nobis quo et veritatis dolor!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsDetail;