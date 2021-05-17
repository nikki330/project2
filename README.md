# project2
### CITS5505 Agile Web Development
### Project Name : Math Education
# Team member:
### QIANRU XU 23023155
### BIYING WANG 22400062
***

#### Design and Development of Application

>Design goal:
We have designed a website about mathematics teaching for this project. The website allows users to learn simple mathematics knowledge through four stages. Each stage has assessments and passes tests to check the learning status and score. After logging in, you can log in Check the learning progress and test scores in the center. Each time the user logs out, the current learning progress can be saved. This project allows users to register, log in, study, and test, and the test cannot be performed without registration and login.

Front-end development process:
>1. We discussed and planned to determine the front-end structure and process together.
>2. The basic structure of the HTML page has been established.
>3. The HTML page structure has been expanded to include navigation links, basic page layouts, the login and registration pages have started, and the basic Try Quiz page has started.
>4. The page verification JS starts, the alarm feedback of some buttons (register, log in, etc.).
>5. index.html page design (home)
>6. Combine the merged main server with conflicts, resolved conflicts, and the interface design and user center implemented on each applicable page.
>7. Improved the page layout and added icons in the navigation bar.
>8. The user interface is modified and the page arrangement is updated to make the appearance look more tidy.
>9. Further modifications and adjustments to the front-end visual design and quality.
>10. The README file updated the description and description and group details.

Back-end development process:
>1. Make a preliminary structural plan, mainly involving the relationship between the database architecture and tables, and create a database form.
>2. Initialize <b>server.py</b> to start the project and create the routing required for the project (registration, login, etc.).
>3. Establish a user database, set up user information for registration and login.
>4. Compare the information with the database, if there is matching data, the login is successful.
>5. Set up four level questions.
>6. The answer information is sent to the front end through the back end, and the answer information is compared.
>7. Users can view their answers, scoring and analysis through feedback.
>8. The normal operation of the program.
>9. The front and back ends are separated, and the back end mainly plays a supporting role.
***
#### Instructions to launch from localhost:
>(The following method is demonstrated in python 3 version)
>1. Check if your python version has pip. `$ pip3 --version`
>1. Set up your pip package manager. If there is no pip, execute  
`curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py`  
`sudo python3 get-pip.py to install.`
>1. Some Linux distributions can install pip directly with the package manager, such as Debian and Ubuntu:  
`sudo apt-get install python-pip`
>1. Install the virtualenv package.  `$ pip install virtualenv` 
>1. Create your virtual environment. `$ virtualenv yourpathname`
>1. Activate the virtual environment. Mac OS / Linux: $ yourpathname / bin / activate Windows: yourpathname \ Scripts \ activate
>1. Install the required modules: `$ pip3 install -r requirements.txt --user`
>1. Open the <b>server.py</b> in the backend folder and run it. This step is to open the running program in the background, where you can see the user's operations.  
*Please do not stop the running of <b>sever.py</b> while using the webpage.*
>1. Open <b>index.html</b> in the frontend folder to open the web page.
>1. You should now be on the web page. You can create your own account to use on the web. Existing account: qianru Password: qianru
>1. You can take a test after learning a part.
***
### Answers to sample questions:
After learning, we can test, some of the answers are as follows. 
>level1  
>Q1: The square root of 9 is  
>A.3  
>B.-3  
>C.4  
>D.-4  
>Answer: A  
>Q2: If the split 1/(x-3) makes sense, x cannot be taken  
>A.3  
>B.-3  
>C.0  
>D.6  
>Answer: A  
Analysis： 
∴x-3≠0，The solution is x≠3.
So, choose A.

>Q3: When a=-1, (a+1)/(a^2-1) will be  
>A.no sense  
>B.0  
>C.1  
>D.-1  
>Answer: A  
Analysis：(1) The condition that the fraction is meaningful: the denominator cannot be 0;
(2) The condition that the fraction is meaningless: the denominator is equal to 0.
(3) The condition for the fraction value to be 0: if the denominator is not equal to 0, and the numerator is equal to 0, the fraction value is 0.

>Q4: m + n = 2, nm = -5, m/n + n/m will be  
>A. -14/5  
>B. -13/5  
>C. -12/5  
>D. -11/5  
>Answer: A  
Analysis：
m/n + n/m= ((m+n)-2-2mn) /mn =( 22-2*(-5))/(-5) = -14/5  
This question examines the addition and subtraction of fractions. In addition, and subtraction of fractions, if it is a fraction with the same denominator, then the denominator is unchanged, and the numerators can be added and subtracted directly; if it is a fraction with a different denominator, you must first divide the fraction and turn the different denominator into the same fraction. The denominator fraction, and then add and subtract.
