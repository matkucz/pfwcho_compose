from flask import current_app
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_db():
    app = current_app
    db.init_app(app)
    # create tables
    from models import Values
    db.create_all(app=app)