import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../utils/constants";
import SearchBar from "./SearchBar";

const NavBar = () => (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
            position: "sticky",
            background: "#000",
            justifyContent: "space-between",
        }}
    >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={Logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
    </Stack>
);
export default NavBar;
