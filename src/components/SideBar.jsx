import React from "react";
import { Stack } from "@mui/material";

import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";


const SideBar = ({ selectedCategory, setselectedCategory }) => {
    const categories = [
        { name: "New", icon: <HomeIcon /> },
        { name: "JS Mastery", icon: <CodeIcon /> },
        { name: "Coding", icon: <CodeIcon /> },
        { name: "ReactJS", icon: <CodeIcon /> },
        { name: "NextJS", icon: <CodeIcon /> },
        { name: "Music", icon: <MusicNoteIcon /> },
        { name: "Education", icon: <SchoolIcon /> },
        { name: "Podcast", icon: <GraphicEqIcon /> },
        { name: "Movie", icon: <OndemandVideoIcon /> },
        { name: "Gaming", icon: <SportsEsportsIcon /> },
        { name: "Live", icon: <LiveTvIcon /> },
        { name: "Sport", icon: <FitnessCenterIcon /> },
        { name: "Fashion", icon: <CheckroomIcon /> },
        { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
        { name: "Comedy", icon: <TheaterComedyIcon /> },
        { name: "Gym", icon: <FitnessCenterIcon /> },
        { name: "Crypto", icon: <DeveloperModeIcon /> },
    ];

    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column" },
            }}
        >
            {categories.map(({ name, icon }, i) => (
                <button
                    key={i}
                    className="category-btn"
                    onClick={() => setselectedCategory(name)}
                    style={{
                        background: name === selectedCategory && "#FC1503",
                        color: "white",
                    }}
                >
                    <span
                        style={{
                            color: name === selectedCategory ? "white" : "red",
                            marginRight: "15px",
                        }}
                    >
                        {icon}
                    </span>
                    <span
                        style={{
                            opacity: name === selectedCategory ? "1" : "0.8",
                        }}
                    >
                        {name}
                    </span>
                </button>
            ))}
        </Stack>
    );
};

export default SideBar;
