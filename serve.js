```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');


// ======================================================
// Portfolio Server - WANNAPORN RATCHAKIT
// ======================================================

const PORT = 3000;


// ======================================================
// MIME TYPES
// ======================================================

const MIME_TYPES = {

    // Web
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',

    // Images
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',

    // Fonts
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',

    // Documents
    '.pdf': 'application/pdf'
};


// ======================================================
// CREATE SERVER
// ======================================================

const server = http.createServer((req, res) => {

    try {

        // ----------------------------------------------
        // Get URL without query string
        // ----------------------------------------------

        let reqUrl = req.url.split('?')[0];


        // ----------------------------------------------
        // Homepage
        // ----------------------------------------------

        if (reqUrl === '/') {
            reqUrl = '/index.html';
        }


        // ----------------------------------------------
        // Decode URL safely
        // ----------------------------------------------

        let decodedPath;

        try {
            decodedPath = decodeURIComponent(reqUrl);
        } catch (error) {

            res.writeHead(400, {
                'Content-Type': 'text/plain; charset=utf-8'
            });

            res.end('400 Bad Request');

            return;
        }


        // ----------------------------------------------
        // Prevent path traversal
        // ----------------------------------------------

        const normalizedPath = path.normalize(decodedPath);

        if (
            normalizedPath.includes('..') ||
            path.isAbsolute(normalizedPath)
        ) {

            res.writeHead(403, {
                'Content-Type': 'text/plain; charset=utf-8'
            });

            res.end('403 Forbidden');

            return;
        }


        // ----------------------------------------------
        // Create file path
        // ----------------------------------------------

        const filePath = path.join(
            __dirname,
            normalizedPath
        );


        // ----------------------------------------------
        // Check file
        // ----------------------------------------------

        fs.stat(filePath, (err, stats) => {

            if (err || !stats.isFile()) {

                res.writeHead(404, {
                    'Content-Type': 'text/html; charset=utf-8'
                });

                res.end(`
  < !DOCTYPE html >
    <html lang="th">
      <head>
        <meta charset="UTF-8">
          <meta name="viewport"
            content="width=device-width, initial-scale=1.0">

            <title>404 | WANNAPORN RATCHAKIT</title>

            <style>

              body {
                margin: 0;
              min-height: 100vh;

              display: flex;
              align-items: center;
              justify-content: center;

              background: #0f172a;
              color: #ffffff;

              font-family:
              Arial,
              sans-serif;

              text-align: center;
                            }

              .error-container {
                padding: 40px;
                            }

              .error-code {
                font - size: 80px;
              font-weight: 800;
              margin-bottom: 10px;
                            }

              .error-title {
                font - size: 28px;
              margin-bottom: 12px;
                            }

              .error-text {
                color: #94a3b8;
              margin-bottom: 25px;
                            }

              .home-btn {
                display: inline-block;

              padding: 12px 24px;

              border-radius: 10px;

              background: #2563eb;
              color: white;

              text-decoration: none;

              transition: .3s;
                            }

              .home-btn:hover {
                background: #1d4ed8;
                            }

            </style>

          </head>

          <body>

            <div class="error-container">

              <div class="error-code">
                404
              </div>

              <div class="error-title">
                ไม่พบหน้าที่ต้องการ
              </div>

              <div class="error-text">
                ขออภัย ไม่พบไฟล์หรือหน้าที่คุณกำลังค้นหา
              </div>

              <a
                href="/"
                class="home-btn">

                กลับหน้า Portfolio

              </a>

            </div>

          </body>
        </html>
        `);

        return;
            }


        // ------------------------------------------
        // Get extension
        // ------------------------------------------

        const ext = path
        .extname(filePath)
        .toLowerCase();


        // ------------------------------------------
        // Get MIME type
        // ------------------------------------------

        const contentType =
        MIME_TYPES[ext] ||
        'application/octet-stream';


        // ------------------------------------------
        // Send response
        // ------------------------------------------

        res.writeHead(200, {

          'Content-Type': contentType,

        'Cache-Control': 'no-cache'

            });


        // ------------------------------------------
        // Stream file
        // ------------------------------------------

        const stream =
        fs.createReadStream(filePath);


            stream.on('error', () => {

                if (!res.headersSent) {

          res.writeHead(500, {
            'Content-Type':
              'text/plain; charset=utf-8'
          });

                }

        res.end(
        '500 Internal Server Error'
        );

            });


        stream.pipe(res);

        });

    } catch (error) {

          console.error(
            'Server Error:',
            error
          );

        res.writeHead(500, {
          'Content-Type':
        'text/plain; charset=utf-8'
        });

        res.end(
        '500 Internal Server Error'
        );

    }

});


// ======================================================
// START SERVER
// ======================================================

server.listen(PORT, () => {

          console.log('');
        console.log(
        '=============================================='
        );

        console.log(
        '   WANNAPORN RATCHAKIT - PORTFOLIO'
        );

        console.log(
        '=============================================='
        );

        console.log(
        `   Portfolio Server:`
        );

        console.log(
        `   http://localhost:${PORT}`
        );

        console.log(
        '=============================================='
        );

        console.log('');

});
        ```

        ### โครงสร้างไฟล์ที่แนะนำ

        ```text
        Portfolio/
        │
        ├── index.html
        ├── server.js
        │
        ├── css/
        │   ├── style.css
        │   └── animations.css
        │
        ├── js/
        │   └── main.js
        │
        ├── assets/
        │   ├── images/
        │   │   └── avatar.jpg
        │   │
        │   ├── certificates/
        │   │   └── ...
        │   │
        │   └── documents/
        │       └── resume.pdf
        │
        └── package.json
        ```

        ### วิธีเปิดเว็บ

        เปิด Terminal ในโฟลเดอร์ Portfolio แล้วใช้

        ```bash
        node server.js
        ```

        จากนั้นเปิด

        ```text
        http://localhost:3000
        ```

        ถ้าใช้ **VS Code + Node.js** ก็สามารถรันได้เลยค่ะ

        **จุดที่ฉันเพิ่มให้:** รองรับ `.webp`, `.woff`, `.woff2`, `.ttf`, `.otf`, `.pdf` และป้องกันการเข้าถึงไฟล์นอกโฟลเดอร์ Portfolio พร้อมหน้า 404 ที่เข้ากับเว็บของบีมค่ะ.
