from flask import Flask, abort
from flask import render_template,make_response
from flask import request

import requests
from io import BytesIO
import re
import json
from datetime import datetime
import os

#from module import pdfgen

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/ip', methods=['GET','POST'])
def ip():
    if request.method=='GET':
        outp_ip = os.getenv('REMOTE_SERVER_IP')
        response = make_response("Remote IP: "+str(outp_ip))
        response.status_code = 200
        return response
    if request.method=='POST':
        data = request.json
        if(data is None):
            response = make_response("failed")
            response.status_code = 200
            return response
        os.environ['REMOTE_SERVER_IP'] = data.get('ip')
        response = make_response("success")
        response.status_code = 200
        return response
    

def rmv(inp,ele):
    tmpa=[]
    for i,v in enumerate(inp):
        if i not in ele:
            tmpa.append(v)
    return tmpa
def rmv2(inp,ele):
    tmpa={}
    for i,v in enumerate(inp):
        if i not in ele:
            tmpa.update({v:inp[v]})
    return tmpa

def check_exist(data:list,inp:list):
    find=0
    try:
        for n1,d1 in enumerate(data):
            if(n1==len(data)-1):
                break
            find1=1
            for n2,d2 in enumerate(inp):
                if(data[n1+n2]!=inp[n2]):
                    find1=0
                    break
            if(find1):
                find=1
                break
    except:
        find=0
    return bool(find)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
