import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";

const Videos = ({ videos }) => {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item, i) => (
                <Box key={i} minHeight={200} width={320}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
