from flask import current_app
from flask_redis import FlaskRedis

redis_client = FlaskRedis()

def init_redis():
    app = current_app
    redis_client.init_app(app)
