import sys
def htmlTojs(filename):
    string = ''
    string1 = ''

    f = open(filename,'r')
    
    for i in f.readlines()[:-1]:
        
        string = ''
        for j in i:

            if j == "\"":
                string += "\'"
            
            else:
                string += j
        # print(string1)
        p = string.index('\n')
        string1 +="\""+string[:p]+"\"+"+string[p:]
        
        
    
    return string1

string = htmlTojs(sys.argv[1])

f = open('new.html','w')
f.write(string)