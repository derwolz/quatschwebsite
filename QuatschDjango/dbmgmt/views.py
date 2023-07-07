from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Verb, Noun, SplitVerb, Preposition, Adverb, Adjective, Conjunction
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import VerbSerializer, NounSerializer, PrepositionSerializer, SplitVerbSerializer, AdverbSerializer, AdjectiveSerializer, ConjunctionSerializer
from random import randint
import json
import qrcode
from io import BytesIO
from django.http import HttpResponse
from .AI import translate_text
class NounViewSet(viewsets.ModelViewSet):
    queryset = Noun.objects.all()
    serializer_class = NounSerializer
    allowed_methods = ["GET", "POST"]
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        print("before serializer")
        if serializer.is_valid():
            print("after serializer")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        print(serializer.error_messages, "\n", serializer.errors)
        print("how did you get here?")

class VerbViewSet(viewsets.ModelViewSet):
    queryset = Verb.objects.all()
    serializer_class = VerbSerializer
    allowed_methods = ["GET", "POST"]
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        print("before serializer")
        if serializer.is_valid():
            print("after serializer")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        print(serializer.error_messages, "\n", serializer.errors)
        print("how did you get here?")

class PrepositionViewSet(viewsets.ModelViewSet):
    queryset = Preposition.objects.all()
    serializer_class = PrepositionSerializer
    allowed_methods = ["GET", "POST"]
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        print("before serializer")
        if serializer.is_valid():
            print("after serializer")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        print(serializer.error_messages, "\n", serializer.errors)
        print("how did you get here?")

class SplitVerbViewSet(viewsets.ModelViewSet):
    queryset = SplitVerb.objects.all()
    serializer_class = SplitVerbSerializer
    parser_classes = [MultiPartParser, FormParser]
    
    allowed_methods = ["GET", "POST"]
    def create(self, request):

        
        serializer = self.serializer_class(data=request.data)
        print("before serializer")
        print(request.data)
        if serializer.is_valid():
            print("after serializer")
            print(serializer.validated_data)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        print(serializer.error_messages, "\n", serializer.errors)
        print("how did you get here?")

class AdverbViewSet(viewsets.ModelViewSet):
    queryset = Adverb.objects.all()
    serializer_class = AdverbSerializer
    allowed_methods = ["GET", "POST"]
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        print("before serializer")
        if serializer.is_valid():
            print("after serializer")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        print(serializer.error_messages, "\n", serializer.errors)
        print("how did you get here?")

class AdjectiveViewSet(viewsets.ModelViewSet):
    queryset = Adjective.objects.all()
    serializer_class = AdjectiveSerializer
    allowed_methods = ["GET", "POST"]
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        print("before serializer")
        if serializer.is_valid():
            print("after serializer")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        print(serializer.error_messages, "\n", serializer.errors)
        print("how did you get here?")

class ConjunctionViewSet(viewsets.ModelViewSet):
    queryset = Conjunction.objects.all()
    serializer_class = ConjunctionSerializer
    allowed_methods = ["GET", "POST"]
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        print("before serializer")
        if serializer.is_valid():
            print("after serializer")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        print(serializer.error_messages, "\n", serializer.errors)
        print("how did you get here?")

def generate_qr_code(request):
    # get the current URL
    url = request.build_absolute_uri()

    # generate the QR code image
    img = qrcode.make(url)

    # convert the image to bytes
    buffer = BytesIO()
    img.save(buffer)
    qr_code_image = buffer.getvalue()

    # return the image as a response
    return HttpResponse(qr_code_image, content_type='image/png')

def generate_sentence(request):
    print("generating sentence")
    Verbs = [selectRandomVerb()]
    resultant = {}
    English = []
    print(Verbs[0].isMaster)
    if Verbs[0].isMaster == "TRUE":
        Verbs.append(selectRandomVerb())
        while Verbs[1].isMaster == "TRUE":
            Verbs[1] = selectRandomVerb()
    Nouns = [selectRandomNoun()]

    for v in Verbs:
        print("v", v.t1, v.t2)
        if v.t1:
            print("t1 noun")
            Nouns.append(selectRandomNoun())
        if v.t2:
            print("t2 noun")
            Nouns.append(selectRandomNoun())
    print(Nouns)
    print(Verbs)

    Sentence = [Nouns[0].nominative,Nouns[0].noun, getConjugation(Nouns[0], Verbs[0])]
    resultant[Nouns[0].noun] = Nouns[0].getUrl()
    resultant[Verbs[0].sie] = Verbs[0].getUrl()
    English.append(Nouns[0].meaning)
    English.append(Verbs[0].meaning)
    if len(Verbs) > 1:
        English.append(Verbs[1].meaning)
    Nouns.pop(0)
    Articlesverb = [Verbs[0] if len(Verbs) == 1 else Verbs[1]]
    
    articles = getCase(Nouns, Articlesverb)

    for n in range(len(Nouns)):
        Sentence.append(articles[n])
        Sentence.append(Nouns[n].noun)
        resultant[Nouns[n].noun] = Nouns[n].getUrl()
        English.append(Nouns[n].meaning)
    Verbs.pop(0)

    for v in Verbs:
        Sentence.append(v.sie)
        resultant[v.sie] = v.getUrl()
    print(Sentence,"\n" ,resultant,"\n" ,English)
    Sentence = [x for x in Sentence if x is not None]
 
    English = [x for x in English if x is not None]
    print(Sentence)
    print(English)
    German = " ".join(Sentence)
    EnglishTranslation = translate_text(German)
    data = {"Sentence":German,"Images": resultant, "English": EnglishTranslation}
    
    print("data:",data)
    jsonData = json.dumps(data)
    response = HttpResponse(jsonData, content_type="application/json; charset=utf-8")

    
    return response
    
def getCase(nouns, verb):
    case1 = {"II":nouns[0].accusative, "III":nouns[0].dative,"IV":nouns[0].genitive}
    
    articles=[]
    articles.append(case1[verb[0].t1])
    if len(nouns) > 1:
        case2 = {"III":nouns[1].dative, "IV":nouns[1].genitive}
        articles.append(case2[verb[0].t2])
    return articles

def getConjugation(noun, verb):
    verbcon = {"M":verb.es,"R":verb.ihr,"F":verb.es,"N":verb.es,"I":verb.ich,"W":verb.wir,"Y":verb.du,"P":verb.sie}
    return verbcon[noun.gender]
    

def selectRandomVerb():
    return Verb.objects.order_by('?').first()
    
def selectRandomNoun():
    return Noun.objects.order_by('?').first()
    