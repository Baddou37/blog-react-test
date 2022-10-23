import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";

export default function Form() {
    const [article, setArticle] = useState({
        title: "",
        body: "",
    });

    console.log(article);

    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_ARTICLE", payload: article });
        setArticle({
            title: "",
            body: "",
        });
    };

    const handleInputs = (e) => {
        if(e.target.classList.contains('inp-title')){
            const newObjState = {
                ...article,
                title: e.target.value,
            };
            setArticle(newObjState);
        }else if(e.target.classList.contains('inp-body')){
            const newObjState = {
                ...article,
                body: e.target.value,
            };
            setArticle(newObjState);
        }
    };

    return (
        <>
            <h1 className="title-form">Écrivez un article</h1>

            <form onSubmit={handleForm} className="container-form">
                <label htmlFor="title">Titre</label>
                <input
                    onInput={handleInputs}
                    value={article.title}
                    type="text"
                    id="title"
                    placeholder="Entrez le titre"
                    className="inp-title"
                />

                <label htmlFor="article">Votre article</label>
                <textarea
                    onChange={handleInputs}
                    name="article"
                    id="article"
                    placeholder="Entrez votre article"
                    value={article.body}
                    className="inp-body"
                />
                <button>Envoyez l'article</button>
            </form>
        </>
    );
}
