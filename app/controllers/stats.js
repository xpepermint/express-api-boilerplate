import config from '../../config';

export default {overview};

function overview(req, res, next) {
  res.status(200).json({
    env: config.env,
    platform: process.platform,
    memoryUsage: process.memoryUsage(),
    uptime: process.uptime()
  });
}
