import React from "react";
import './Aside.css';
export const foldingAside = (props) => {
    console.log(props);
}
const Aside = () => {
    return (
        <aside className="aside--add active">
            <div className="aside-contents">
                <h2 className="title">Add New Product</h2>
            </div>
            <div className="aside-fixed">
                <button className="btn--reset" type="reset">Reset</button>
                <button className="btn--save" type="submit">Save</button>
            </div>
        </aside>
    );
}

export default Aside;