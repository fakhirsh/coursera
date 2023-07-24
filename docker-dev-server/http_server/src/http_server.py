#!/user/bin/python3

import os
import http.server
import socketserver
import json

from urllib.request import Request, urlopen

HTTP_PORT = int(os.environ.get('PORT', 8000))
API_SERVER_URL = os.environ.get('API_SERVER_URL')

class RequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

        html = """
            <html>
                <head>
                    <title>HTTP Server</title>
                </head>
                <body>
                    <h1>HTTP Server</h1>
                    <p>{message}</p>
                </body>
            </html>"""

        if API_SERVER_URL is not None:
            url = f"{API_SERVER_URL}/person"
            response = urlopen(Request(url))
            person = json.loads(response.read().decode())
            message = f"Hello from {person['name']} {person['surname']}"
        else:
            message = "No connection to API server. API_SERVER_URL not defined."

        self.wfile.write(html.format(message=message).encode('utf8'))
        return
    
socketserver.TCPServer(("", HTTP_PORT), RequestHandler).serve_forever()