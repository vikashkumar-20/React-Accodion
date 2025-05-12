import { useEffect, useState } from "react";
import { JsonData } from "../api/JsonData";


export const Post = () => {
    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(null);
    

    useEffect(() => {
        setData(JsonData)
    }, [])

     const handleToggle = (id) => {
        setActiveId(prevId => (prevId === id ? null : id)); // Toggle logic
    };

    return (
        <div className="hero-section">
            <ul>
                {
                    data.map((currElem) => {
                        const {id, title, content}   = currElem;
                         const isActive = activeId === id;
                        return <li key={id}>
                            <div className="content">
                                <h2>{title}</h2>
                                {isActive && <p>{content}</p>}
                            </div>
                            <div>
                                 <button onClick={() => handleToggle(id)}>
                                        {isActive ? 'Close' : 'Show'}
                                    </button>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    );
}