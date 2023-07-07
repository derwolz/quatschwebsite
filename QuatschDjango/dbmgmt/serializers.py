from rest_framework import serializers
from .models import Noun, Verb, Preposition, SplitVerb, Adverb, Conjunction, Adjective
class NounSerializer(serializers.ModelSerializer):
    class Meta:
        model = Noun
        fields = '__all__'

class VerbSerializer(serializers.ModelSerializer):
    class Meta:
        model = Verb
        fields = '__all__'

class PrepositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preposition
        fields = '__all__'

class SplitVerbSerializer(serializers.ModelSerializer):
    #prepositions = PrepositionSerializer(many=True)
    prepositions = serializers.SlugRelatedField(queryset=Preposition.objects.all(),
                                                many=True,
                                                slug_field="preposition")
    class Meta:
        model = SplitVerb
        fields = '__all__'

class AdverbSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adverb
        fields = '__all__'

class AdjectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adjective
        fields = '__all__'

class ConjunctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conjunction
        fields = '__all__'