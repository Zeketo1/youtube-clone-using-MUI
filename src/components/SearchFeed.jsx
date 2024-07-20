import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI.js";

const SearchFeed = () => {
    const [videos, setvideos] = useState([]);

    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => {
                setvideos(data.items);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                mb={2}
                sx={{ color: "white" }}
            >
                Search Results for:{" "}
                <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
            </Typography>

            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;
