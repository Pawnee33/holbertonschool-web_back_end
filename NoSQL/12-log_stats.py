#!/usr/bin/env python3
"""Module script that provides some stats about
Nginx logs stored in MongoDB"""
from pymongo import MongoClient

if __name__ == "__main__":
    with MongoClient('mongodb://127.0.0.1:27017') as client:
        db = client.logs
        nginx = db.nginx
        
        print("{} logs".format(nginx.count_documents({})))

        print("Methods:")

        for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
            print("\tmethod {}: {}".format(method, nginx.count_documents({"method": method})))

        print("{} status check".format(nginx.count_documents({"method": "GET", "path": "/status"})))
