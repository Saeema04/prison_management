from flask import Flask, render_template, request, session
from werkzeug.utils import redirect

from DB import db, query as q

methods = ['GET', 'POST']
app = Flask(__name__)
KEY = 'aljflajfoAWHAOGAJ'
app.secret_key = KEY

conn = db.fypDB_Connect()


@app.route('/', methods=methods)
def index():
    return "hello, world"


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
    db.close(conn)
