import React, { useState } from "react";
import QuickSave from "./QuickSave";

function SavedItems(props) {
const [savedItems, setSavedItems] = useState([])

    return (
        <div>
            Saved Items
            <div onClick={QuickSave}>
                click on this
            </div>
            {/* <QuickSave/> */}
        </div>
    );
}

export default SavedItems;