from db import db

class Values(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer)
