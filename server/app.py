import os
from flask import Flask, jsonify
from models import Values
from db import db
from redis_conf import redis_client

def create_app():
    app = Flask(__name__)
    db_name = os.getenv("DB_NAME")
    db_username = os.getenv("DB_USERNAME")
    db_host = os.getenv("DB_HOST")
    db_password = os.getenv("DB_PASSWORD")
    db_port = os.getenv("DB_PORT")
    redis_port = os.getenv("REDIS_PORT")
    redis_host = os.getenv("REDIS_HOST")
    redis_password = os.getenv("REDIS_PASSWORD", "")
    debug = os.getenv("DEBUG", 0)
    app.config["DEBUG"] = debug
    app.config["SQLALCHEMY_DATABASE_URI"] = f"postgresql://{db_username}:{db_password}@{db_host}:{db_port}/{db_name}"
    app.config["REDIS_URL"] = f"redis://:{redis_password}@{redis_host}:{redis_port}"
    from redis_conf import init_redis
    from db import init_db
    with app.app_context():
        init_redis()
        init_db()
    return app

app = create_app()

@app.route("/fibonacci", methods=["GET"])
def get_all():
    values = db.session.query(Values).all()
    output = [{ "number": value.number, "id": value.id } for value in values]
    return jsonify(output)


@app.route("/fibonacci/current", methods=["GET"])
def get_current():
    values = redis_client.hgetall("values")
    output = [{key.decode(): value.decode()} for key, value in values.items()]
    return jsonify(output)

@app.route("/fibonacci/<int:value>", methods=["POST"])
def post_value(value):
    db_value = Values(number=value)
    # none value by default
    redis_client.hset("values", value, "Empty")
    redis_client.publish("mes", value)
    db.session.add(db_value)
    db.session.commit()
    return jsonify({"message": "ok"})

if __name__ == '__main__':
    app.run(host='0.0.0.0')