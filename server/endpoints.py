from flask import jsonify
from app import create_app
from models import Values
from db import db
from redis_conf import redis_client

app = create_app()

@app.route("/fibonacci", methods=["GET"])
def get_all():
    values = Values.query.all()
    return jsonify(values)


@app.route("/fibonacci/current", methods=["GET"])
def get_current():
    value = redis_client.hgetall("values")
    return jsonify(value)

@app.route("/fibonacci/<int:value>", methods=["POST"])
def post_value(value):
    value = Values(number=value)
    # none value by default
    redis_client.hset("values", value)
    redis_client.publish("mes", value)
    db.session.add(value)
    db.session.commit()