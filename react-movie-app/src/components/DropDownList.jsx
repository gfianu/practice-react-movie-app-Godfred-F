import { useState } from "react";
import MovieSelector from "./MovieSelector";

export default function DropDownList () {
    return (
        <div>
            <select>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
             </select>
        </div>

    )
}