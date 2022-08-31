import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

function SavedItems(props) {
    const [savedItems, setSavedItems] = useState([]);

    axios.get(`http://localhost:8000/api/saved`).then((res) => {
        console.log(res.data);
        setSavedItems(res.data);
    })

    return (
        <div>
            <div>
                <h2>Saved Items</h2>
                <div>
                    <Link href="/QuickSave">click on this</Link>
                </div>
            </div>
        </div>
    );
}

export default SavedItems;