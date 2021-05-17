from flask import Flask,jsonify,request,session
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

import os
import json
app = Flask(__name__)
app.secret_key = "hello"
CORS(app, resources=r'/*')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
# app.permanent_session_lifetime = timedelta(minutes=5)



db = SQLAlchemy(app)


class UserDb(db.Model):
   id = db.Column(db.Integer,primary_key = "True")
   userName = db.Column(db.String(200),nullable = False)
   userPassword = db.Column(db.String(200),nullable = False)
   l1_marks = db.Column(db.Integer)
   l2_marks = db.Column(db.Integer)
   l3_marks = db.Column(db.Integer)
   l4_marks = db.Column(db.Integer)


   def __repr__(self):
      return '<Name %r>' %self.id

#python enter python terminal environment
#from server import db
#db.create_all() create database user.db, create table UserDb

@app.route('/registered',methods=['POST','GET'])
def registered():
   if request.method == 'POST':
      r_u = request.form['r_u']
      r_p = request.form['r_p']
      user = UserDb()
      user.userName = r_u
      user.userPassword = r_p

      found_user = UserDb.query.filter_by(userName=r_u).first()
      print('r_p',r_p)
      if found_user:

         return jsonify(resultMessage='someone already registered',resultType='warning')
      else:
         try:

            user.l1_marks = 0
            user.l2_marks = 0
            user.l3_marks = 0
            user.l4_marks = 0
            db.session.add(user)
            db.session.commit()
         except:
            return jsonify(resultMessage='there was a error to registered',resultType="error")
      return jsonify(resultMessage='Registered successfully',resultType='success')

@app.route('/login',methods=['POST','GET'])
def login():
   if request.method == 'POST':
      session.permenant = True
      l_u = request.form['l_u']
      l_p = request.form['l_p']
      user = UserDb()
      user.userName = l_u
      user.userPassword = l_p

      found_user = UserDb.query.filter_by(userName=l_u,userPassword=l_p).first()

      if found_user:
         return jsonify(resultMessage='Login successfully',resultType='success',userId=l_u,userPa=l_p)
      else:
         return jsonify(resultMessage='There is no matching username and password', resultType='warning')

@app.route('/loadQ1',methods=['POST','GET'])
def loadQ1():
   if request.method == 'POST':
      lst = [
         {"question": "The square root of 9 is",
          "c1": "3", "c2": '-3', 'c3': '4', 'c4': '-4', 'qid': 'q1', 'aQ': '3','ana':'3^2 is 9 and answer can not be nagetive'},
         {"question": "If the split 1/(x-3) makes sense, x cannot be taken",
          "c1": "3", "c2": '-3', 'c3': '0', 'c4': '6', 'qid': 'q2', 'aQ': '3','ana':'∴x-3≠0，The solution is x≠3. So, choose A.'},
         {"question": "(a+1)/(a^2-1) will be",
          "c1": "no sense", "c2": '0', 'c3': '1', 'c4': '-1', 'qid': 'q3', 'aQ': 'no sense','ana':'(1) The condition that the fraction is meaningful: the denominator cannot be 0;(2) The condition that the fraction is meaningless: the denominator is equal to 0.(3) The condition for the fraction value to be 0: if the denominator is not equal to 0, and the numerator is equal to 0, the fraction value is 0.'},
         {"question": "m + n = 2, nm= -5",
          "c1": "-14/5", "c2": '-13/5', 'c3': '-12/5', 'c4': '-11/5', 'qid': 'q4', 'aQ': '-14/5','ana':'m/n + n/m= ((m+n)-2-2mn) /mn =( 22-2*(-5))/(-5) = -14/5 This question examines the addition and subtraction of fractions. In addition, and subtraction of fractions, if it is a fraction with the same denominator, then the denominator is unchanged, and the numerators can be added and subtracted directly; if it is a fraction with a different denominator, you must first divide the fraction and turn the different denominator into the same fraction. The denominator fraction, and then add and subtract.'},
      ]
      return jsonify(lst)



@app.route('/loadP1', methods=['POST', 'GET'])
def loadP1():
   if request.method == 'POST':
      lst = [
         {'img':'./img/math1.jpg','name':'Math Level1','id':'math_level1',"jump":"study1.html"},
         {'img': './img/math2.jpg', 'name': 'Math Level2', 'id': 'math_level2', "jump": "study2.html"},
         {'img': './img/math1_1.jpg', 'name': 'Math Level3', 'id': 'math_level3', "jump": "study3.html"},
         {'img': './img/math1_2.jpg', 'name': 'Math Level4', 'id': 'math_level4', "jump": "study4.html"}
      ]
      return jsonify(lst)

@app.route('/loadQ2',methods=['POST','GET'])
def loadQ2():
   if request.method == 'POST':
      lst = [
         {"question": "Knowing that the degrees of the two angles are 120°-α and α-30°, the relationship between the two angles is",
          "c1": "Mutual redundancy", "c2": 'equal', 'c3': 'Complementary', 'c4': 'can not confirm', 'qid': 'q2', 'aQ': 'Mutual redundancy'},
      ]
      return jsonify(lst)
@app.route('/loadQ3',methods=['POST','GET'])
def loadQ3():
   if request.method == 'POST':
      lst = [
         {"question": "1: The solution of the unary linear equation 3=x-2 is:",
          "c1": "5", "c2": '-5', 'c3': '1', 'c4': '-1', 'qid': 'q1', 'aQ': '5'},
         {"question": "2: The smaller root of the equation x^2-2x-2=0 is x1. The following estimate of x1 is correct:",
          "c1": "-2＜x1＜-1", "c2": '-1＜x1＜0', 'c3': '0＜x1＜1', 'c4': '1＜x1＜2', 'qid': 'q2', 'aQ': '-1＜x1＜0'},
         {"question": "3: 〖3x〗^2+2x+1=0 (a≠0) The quadratic term is:",
          "c1": "2", "c2": '〖3x〗^2', 'c3': '1', 'c4': '-1', 'qid': 'q3', 'aQ': '〖3x〗^2'},
      ]
      return jsonify(lst)

@app.route('/loadQ4',methods=['POST','GET'])
def loadQ4():
   if request.method == 'POST':
      lst = [
         {"question": "1: The length of the hypotenuse of a right-angled triangle is 2 larger than the length of the right-angled side, and the length of the other right-angled side is 6, then the length of the hypotenuse is ()",
          "c1": "4", "c2": '8', 'c3': '10', 'c4': '12', 'qid': 'q1', 'aQ': '10'},
         {"question": "2: Extend the length of the three sides of a right-angled triangle by the same multiple at the same time, and the triangle obtained is ()",
            "c1": "Obtuse triangle", "c2": 'Acute triangle', 'c3': 'Right triangle', 'c4': 'Isosceles triangle', 'qid': 'q2', 'aQ': 'Right triangle'},
         {"question": "3: 3: In △ABC, AB = 12cm, BC = 16cm, and AC = 20cm, then the area of △ABC is ()",
          "c1": "96cm", "c2": '120cm', 'c3': '160cm', 'c4': '200cm', 'qid': 'q3', 'aQ': '96cm'},
      ]
      return jsonify(lst)

@app.route('/loadUserCenter',methods=['POST','GET'])
def loadUserCenter():
   if request.method == 'POST':
      l_u = request.form['l_u']
      l_p = request.form['l_p']
      user = UserDb()
      user.userName = l_u
      user.userPassword = l_p

      found_user = UserDb.query.filter_by(userName=l_u,userPassword=l_p).first()

      if found_user:
         return jsonify(l1 = found_user.l1_marks,l2= found_user.l2_marks,l3 = found_user.l3_marks,l4= found_user.l4_marks)
      else:
         return jsonify(resultMessage='There is no matching username and password', resultType='warning')

@app.route('/updateMark',methods=['POST','GET'])
def updateMark():
   if request.method == 'POST':
      l_u = request.form['l_u']
      l_p = request.form['l_p']
      level = request.form['level']
      mark = request.form['mark']
      user = UserDb()
      user.userName = l_u
      user.userPassword = l_p
      mark = float(mark)
      found_user = UserDb.query.filter_by(userName=l_u, userPassword=l_p).first()
      if found_user:
         if level == '1':
            if found_user.l1_marks < mark:
               found_user.l1_marks = mark
               db.session.commit()
         if level == '2':
            if found_user.l2_marks < mark:
               found_user.l2_marks = mark
               db.session.commit()

         if level == '3':
            if found_user.l3_marks < mark:
               found_user.l3_marks = mark
               db.session.commit()

         if level == '4':
            if found_user.l4_marks < mark:
               found_user.l4_marks = mark
               db.session.commit()
      return jsonify(result='success')




@app.route('/ifLogin', methods=['POST', 'GET'])
def ifLogin():

   print(session.get("hello"))
   if not session.get('hello'):
      return jsonify(result='no')
   return jsonify(result='yes')

if __name__ == '__main__':
   app.run()