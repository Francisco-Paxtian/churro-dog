import React from 'react';

const Article = (props) => {

    return (
        <div>
            <hr className="salto" />
            <div className="blog-contenedor w-auto h-auto bg-white ">
                <h1 className=" px-20 py-10  text-xl lg:text-4xl 2xl:text-5xl 2xl:pl-44 text-left font-bold text-black">
                    {props.title}
                </h1>
                <br></br>
                <h1 className=" pb-20 2xl:text-2xl 2xl:mt-0 px-20 2xl:px-44 text-slate-800">
                    {props.paragraph}
                </h1>
            </div>
        </div>
    )
}

export default Article;