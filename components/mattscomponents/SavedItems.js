import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

function SavedItems(props) {
    const [savedItems, setSavedItems] = useState([]);

    // axios.get(`http//localhost:3000/api/saved_items`)

    return (
        <div>
            Saved Items
            <div>
                <Link href="/QuickSave">click on this</Link>
            </div>
        </div>
    );
}

export default SavedItems;