import React from 'react';

function Articles(props) {
    
    const {articles} = props

    const allArticles = articles

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                
                    {allArticles.map((article)=>{
                        const {title, upvotes, date} = article
                        return(
                            <tr data-testid="article" key={date}>
                            <td data-testid="article-title">{title}</td>
                            <td data-testid="article-upvotes">{upvotes}</td>
                            <td data-testid="article-date">{date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
