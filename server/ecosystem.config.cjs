// pm2 process config for the contact relay.
//
// Usage (from the server/ directory on the VPS):
//   pm2 start ecosystem.config.cjs      # start
//   pm2 restart ecosystem.config.cjs    # after pulling changes
//   pm2 save                            # remember the process list across reboots
//
// To auto-start on VPS boot, run once and follow the printed command:
//   pm2 startup
//   pm2 save
//
// Named .cjs because package.json sets "type": "module" — pm2 config files
// must be CommonJS.

module.exports = {
  apps: [
    {
      name: 'cv-contact-relay',
      script: 'index.mjs',
      // Env comes from server/.env, which the script loads itself. Set NODE_ENV
      // here so pm2 and logs reflect production.
      env: {
        NODE_ENV: 'production',
      },
      // Keep it alive; back off if it crash-loops.
      autorestart: true,
      max_restarts: 10,
      restart_delay: 2000,
      // Recycle if it ever leaks past 128 MB (it shouldn't — it's tiny).
      max_memory_restart: '128M',
      // Timestamped logs under ~/.pm2/logs by default.
      time: true,
    },
  ],
}
