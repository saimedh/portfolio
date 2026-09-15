import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import handler from './api/contact.ts';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Expose RESEND_API_KEY and CONTACT_EMAIL to server environment if present in .env
  if (env.RESEND_API_KEY) process.env.RESEND_API_KEY = env.RESEND_API_KEY;
  if (env.CONTACT_EMAIL) process.env.CONTACT_EMAIL = env.CONTACT_EMAIL;

  return {
    plugins: [
      react(),
      {
        name: 'api-contact-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const url = req.url || '';
            if (url === '/api/contact' || url.startsWith('/api/contact?')) {
              // augment res with .status() and .json() helper methods
              (res as any).status = (code: number) => {
                res.statusCode = code;
                return res;
              };
              (res as any).json = (data: any) => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
                return res;
              };

              if (req.method === 'POST') {
                let rawBody = '';
                req.on('data', (chunk) => {
                  rawBody += chunk;
                });
                req.on('end', async () => {
                  try {
                    (req as any).body = rawBody ? JSON.parse(rawBody) : {};
                  } catch {
                    (req as any).body = {};
                  }
                  await handler(req, res);
                });
                return;
              }

              await handler(req, res);
              return;
            }
            next();
          });
        },
      },
    ],
  };
});
