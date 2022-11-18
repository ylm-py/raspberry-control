# Raspberry control using flask

This is a simple project for school that allows controlling raspberry pi device by turning it into a 
web server using flask.


## Installation

Setting up the server

```bash
$  git clone https://github.com/ylm-py/raspberry-control.git
$  cd raspberry-control
```

Running the server :

```bash
$  cd server
```
For windows :
```bash
$  py -3 -m venv venv
```

For linux :
```bash
$  python3 -m venv venv
```
**NB: make sure to have python 3 installed in your machine***

#### Activate the environment :

For windows :
```bash
$ venv\Scripts\activate
```
For linux :
```bash
$ . venv/bin/activate
```
Your shell prompt will change to show the name of the activated environment.

### Install flask
Within the activated environment, use the following command to install Flask:
```bash
$ pip install Flask
```
### Run the server
Within the activated environment, use the following command to run the server:
```bash
$ flask --app app run
```
By default the server will be running on [http://localhost:5000](Link)

## Setting up client side :
Withing the root directory 'raspberry-control' switch to 'front' directory using :
```bash
$ cd front
```
then run :
```bash
$ npm install
```
after installing the packages :
```bash
$ npm start
```
by default the web application will run on [http://localhost:3000](Link)





  

    