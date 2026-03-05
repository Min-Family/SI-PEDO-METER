from flask import Flask, render_template, jsonify
import threading
import time

app = Flask(__name__)

rpm_value = 0
rpm_direction = 1


def update_rpm():
    global rpm_value, rpm_direction
    while True:
        rpm_value += rpm_direction * 100
        if rpm_value >= 8000 or rpm_value <= 0:
            rpm_direction *= -1
        time.sleep(0.5)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/data')
def data():
    return jsonify({"rpm": rpm_value})


if __name__ == '__main__':
    thread = threading.Thread(target=update_rpm)
    thread.daemon = True
    thread.start()

    app.run(debug=True)