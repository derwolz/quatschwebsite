# -*- coding: utf-8 -*-
from Vocab import *
import requests
def main():
    url = "https://api.quatschgame.com/"
    filepaths = {
        #"adj":"./csv/WebsiteVocabulary - adjectives.csv",
        #"con":"./csv/WebsiteVocabulary - Conjunctions.csv",
        #"adv":"./csv/WebsiteVocabulary - Adverbs.csv",
        #"p":"./csv/WebsiteVocabulary - Prepositions.csv",
        #"sv":"./csv/WebsiteVocabulary - SplitVerbs.csv",
        #"v":"./csv/WebsiteVocabulary - Verbs.csv",
        "n":"./csv/WebsiteVocabulary - Nouns.csv",
        
    }
    session = requests.Session()
    response = session.get(url+"admin/login/")
    csrf_token=response.cookies['csrftoken']
    input()
    login_data = {
        'username': "Botanical6026",
        'password': "u5&9FyZB9HB&V7",
        'csrfmiddlewaretoken': csrf_token
    }
    headers = {
        "Referer": url+"admin/login/"
    }
    
    response=session.post(url+"admin/login", data=login_data, headers=headers)
    if response.status_code == 200:
        print("login successful")
        print(response.content)
    else:
        print(response.content)
    input()
    headers = {
        "csrfmiddlewaretoken": csrf_token,
        
    }
    functions = {
        "adj":Adjective,
        "con":Conjunction,
        "adv":Adverb,
        "sv":SplitVerb,
        "v":Verb,
        "n":Noun,
        "p":Preposition,
    }
    routes = {
        "adj":"adjectives/",
        "con":"conjunctions/",
        "adv":"adverbs/",
        "sv":"splitverbs/",
        "v":"verbs/",
        "n":"nouns/",
        "p":"prepositions/",
    }
    print("Ready")
    
    
    for key in filepaths.keys():
        
        print(key)
        with open(filepaths[key], 'r', encoding="utf-8") as file:
            lines = file.readlines()
            print(len(lines))
            print(lines[0])
            print("-1",lines[-1])
            lines.pop(0)
            print(lines[0])
            print(len(lines))
            for line in lines:
                print("allStuff",line)
                dic, image = functions[key](line.split(','))
                print("DickImage",dic, image)
                response = session.post(url+routes[key], data=dic, files=image, headers=headers)

                if response.status_code == 200:
                    print("success")
                else:
                    print(response.status_code)
                    logLines = []
                    logLines.append(str(response.content)+"\n")
                    with open("./log", "r") as readfile:
                        readlines = readfile.readlines()
                        for readline in readlines:
                            logLines.append(readline)

                    with open("./log", "w") as writefile:
                        writefile.writelines(logLines)
if __name__ == "__main__":
    main()