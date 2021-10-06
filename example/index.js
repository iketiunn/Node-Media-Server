const NodeMediaServer = require('../src/node_media_server.js');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    mediaroot: './media',
    allow_origin: '*'
  },
  trans: {
    ffmpeg: '/usr/local/bin/ffmpeg',
    cleanup: true,
    tasks: [
      {
         app: 'live',
         hls: true,
         hlsFlags: '[hls_time=2:hls_list_size=30:hls_flags=delete_segments]',
      }
    ]
  },
};

var nms = new NodeMediaServer(config)
nms.run();

