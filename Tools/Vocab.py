from PIL import Image

def Noun(listData):
    dic = {
    "noun"          :listData[0],
    "meaning"       :listData[1],
    "nominative"    :listData[2],
    "accusative"    :listData[3],
    "dative"        :listData[4],
    "genitive"      :listData[5],
    "gender"        :listData[6],
    "n1e"           :listData[7],
    "n2e"           :listData[8],
    "n1"            :listData[9],
    "n2"            :listData[10],
    "a1e"           :listData[11],
    "a2e"           :listData[12],
    "a1"            :listData[13],
    "a2"            :listData[14],
    "d1e"           :listData[15],
    "d2e"           :listData[16],
    "d1"            :listData[17],
    "d2"            :listData[18],
    "g1e"           :listData[19],
    "g2e"           :listData[20],
    "g1"            :listData[21],
    "g2"            :listData[22],
    
    }
    return dic, {"image": open(listData[23].split("\n")[0], 'rb')}
def ProNoun(listData):
    dic = {
        "meaning"      :listData[0],
        "nominative"    :listData[2],
        "accusative"    :listData[3],
        "dative"        :listData[4],
        "genitive"      :listData[5],
        "gender"        :listData[6],
        "n1e"           :listData[7],
        "n2e"           :listData[8],
        "n1"            :listData[9],
        "n2"            :listData[10],
        "a1e"           :listData[11],
        "a2e"           :listData[12],
        "a1"            :listData[13],
        "a2"            :listData[14],
        "d1e"           :listData[15],
        "d2e"           :listData[16],
        "d1"            :listData[17],
        "d2"            :listData[18],
        "g1e"           :listData[19],
        "g2e"           :listData[20],
        "g1"            :listData[21],
        "g2"            :listData[22],
    }
def Verb(listData):
    dic = {
    "verb"      :listData[0],
    "meaning"   :listData[1],
    "ich"       :listData[2],
    "du"        :listData[3],
    "es"        :listData[4],
    "wir"       :listData[5],
    "ihr"       :listData[6],
    "sie"       :listData[7],
    "target1"   :listData[8],
    "target2"   :listData[9],
    "t1"        :listData[10],
    "t2"        :listData[11],
    "isMaster"  :listData[12],
    }
    return dic, {"image": open(listData[13].split("\n")[0], 'rb')}
    
def Preposition(listData):
    dic = {"preposition":listData[0],
    "meaning"           :listData[1],
    "cases"              :listData[2].split(";"),
    }
    return dic, {"image": open(listData[3].split("\n")[0], 'rb')}

def SplitVerb(listData):
    print(listData[11].split(";"))
    dic = {
    "verb"          :listData[0],
    "english"       :listData[1],
    "ich"           :listData[2],
    "du"            :listData[3],
    "es"            :listData[4],
    "wir"           :listData[5],
    "ihr"           :listData[6],
    "sie"           :listData[7],
    "target"        :listData[8],
    "target2"       :listData[9],
    "cases"         :listData[10],
    "prepositions"  :listData[11].split(";"),
    }
    return dic, {"image": open(listData[12].split("\n")[0], 'rb')}

def Adverb(listData):
    dic = {"adverb":listData[0],
    "meaning":listData[1],
    }
    return dic, {"image": open(listData[2].split("\n")[0], 'rb')}

def Adjective(listData):
    dic = {
    "adjective"     :listData[0],
    "meaning"       :listData[1],
    "denotion"      :listData[2],
    "ein"           :listData[3],
    }
    return dic, {"image": open(listData[4].split("\n")[0], 'rb')}

def Conjunction(listData):
    dic = {
    "conjunction"   :listData[0],
    "english"       :listData[1],
    "type "         :listData[2],
    "articles"      :listData[3].split(";"),
    }
    return dic, {"image": open(listData[4].split("\n")[0], 'rb')}