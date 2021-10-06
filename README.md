# Node-Media-Server

A Node.js implementation of RTMP/HTTP-FLV/WS-FLV/HLS/DASH Media Server
https://github.com/illuspas/Node-Media-Server/blob/master/README.md)

This fork aim to solve:

1 Keep hls files to be able to do VOD (uploaded to s3 or something similar)

- optional flag to keep files after stream closed
- Manage the file structures(eg, by day)

2 Replace modules that may improve performance/control:

- ffmpeg.wasm, may use ffi instead of spawn a process (https://github.com/ffmpegwasm/ffmpeg.wasm)
- https://github.com/fluent-ffmpeg/node-fluent-ffmpeg
- uWebSockets.js, may improve the hls performance (https://github.com/uNetworking/uWebSockets.js)

3 (Optional) pre register hook to validate the authorization of the rtmp client

- currently preRegister hook is asynced, can't prevent anonymous client to connect natively
