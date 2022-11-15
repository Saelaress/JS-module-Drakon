# https://vk.com/@pylounge-veb-server-na-python-v-3-strochki

import os
from http.server import HTTPServer, CGIHTTPRequestHandler

# Make sure the server is created at current directory
# directory = '../DrakonHub_files'
directory = '../'
os.chdir(directory)

# Create server object listening the port 9080
server_object = HTTPServer(server_address=('', 9080), RequestHandlerClass=CGIHTTPRequestHandler)

print("Начинаем")

# Start the web server
server_object.serve_forever()

print("Закончили")
