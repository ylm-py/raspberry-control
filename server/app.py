#create a simple server
from flask import Flask
from flask_cors import CORS
# import RPi.GPIO as GPIO
data = [{
            "name" : "LED1",
            "color" : "error",
            "state" : 1,
            "brightness" : 100,
            "GPIO" : 12
        },
        {
            "name" : "LED2",
            "color" : "success",
            "state" : 0,
            "brightness" : 100,
            "GPIO" : 32
        },
        {
            "name" : "LED3",
            "color" : "secondary",
            "state" : 1,
            "brightness" : 100,
            "GPIO" : 33
        }]
# GPIO.setWarnings(False)
# GPIO.setmode(GPIO.BOARD)
# def init():
#     for i in data:
#         GPIO.setup(i["GPIO"], GPIO.OUT)
#         GPIO.output(i["GPIO"], GPIO.HIGH)
#         i["state"] = 1
#         GPIO.pwm(i["GPIO"], 100).start(100)
#         GPIO.pwm.ChangeDutyCycle(i["brightness"])

# init()

app = Flask(__name__)
CORS(app)

# def updateData():
#     for i in range(len(data)):
#         data[i]['state'] = GPIO.input(data[i]['GPIO'])
#     return
@app.route('/')
def hello_world():
    # updateData()
    return data

@app.route('/<int:gpio>/<string:state>')
def change_state(gpio, state):
    if state != "on" and state != "off":
        return "Invalid state", 400
    for led in data:
        if led["GPIO"] == gpio:
            led["state"] = 1 if state == "on" else 0
            # GPIO.output(gpio, led["state"])
            return led, 200

@app.route('/<int:gpio>/<int:brightness>')
def change_brightness(gpio, brightness):
    if brightness < 0 or brightness > 100:
        return "Invalid brightness", 400
    for led in data:
        if led["GPIO"] == gpio:
            led["brightness"] = brightness
            # GPIO.pwm.ChangeDutyCycle(brightness)
            return led, 200
if __name__ == '__main__':
    app.run()
    