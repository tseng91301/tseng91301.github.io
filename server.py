from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import handle

# 定义一个带有 CORS 的请求处理程序
class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        SimpleHTTPRequestHandler.end_headers(self)

# 定义一个带有 POST 请求的请求处理程序
class PostHandler(CORSRequestHandler):
    def do_POST(self):
        # 获取POST请求的数据
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        # 解析JSON数据
        try:
            data = json.loads(post_data.decode('utf-8'))
            # 在服务器端打印收到的数据
            handle.handle_post(data)
            
            # 在这里处理收到的数据，你可以添加自己的逻辑
            # 例如，可以将数据存储到数据库中或执行其他操作
            
            # 响应客户端
            self.send_response(200)
            self.end_headers()
            self.wfile.write(json.dumps({"message": "POST request received"}).encode('utf-8'))
        except json.JSONDecodeError:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Invalid JSON data"}).encode('utf-8'))

# 定义服务器地址和端口
host = '0.0.0.0'
port = 8000

# 创建服务器对象，使用 PostHandler
server = HTTPServer((host, port), PostHandler)
print(f'Starting server on {host}:{port}')

# 启动服务器
server.serve_forever()
