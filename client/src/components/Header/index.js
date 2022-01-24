import React, { useState } from "react";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";

function Header() {
    return (
            <nav>
                <ul>
                    <li>
                        <a href="/">Nav 1</a>
                    </li>
                    <li>
                        <a href="/">Nav 2</a>
                    </li>
                    <li>
                        <a href="/">Nav 3</a>
                    </li>
                    <li>
                        <a href="/">Nav 4</a>
                    </li>
                </ul>
            </nav>
    );
}

export default Header;
