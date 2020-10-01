import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from "./data.json";
class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header className="masthead tintuc mb-2">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5 tieude">Trang danh sách tin</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        {data.map((value, key) => {
                            return (
                                <NewsItem tinId={value.id} key={key} imageSrc={value.imageSrc} title={value.title} quote={value.quote} />
                            );
                        })}
                    </div>
                </div>

            </div>
        );
    }
}

export default News;