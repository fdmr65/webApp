from flask import Flask, render_template, Response, jsonify, request, flash, redirect, url_for, logging
from VoltEkran import *

app = Flask(__name__)

@app.route('/', methods=['GET'])
def get_index():
    return render_template('index.html')

@app.route('/tables.html', methods=['GET'])
def get_tables():
    return render_template('tables.html')

@app.route('/index.html', methods=['GET'])
def get_dashboard():
    return render_template('index.html')

@app.route('/ariza1.html', methods=['GET'])
def get_ariza1():
    return render_template('ariza1.html')

@app.route('/ariza2.html', methods=['GET'])
def get_ariza2():
    return render_template('ariza2.html')

@app.route('/ariza3.html', methods=['GET'])
def get_ariza3():
    return render_template('ariza3.html')


if __name__ == '__main__':
    app.run(debug=True)