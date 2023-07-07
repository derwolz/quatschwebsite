from django.db import models
from PIL import Image

class Noun(models.Model):
    noun = models.CharField(max_length=255          ,blank=True, null=True)
    meaning = models.CharField(max_length=255       )
    nominative = models.CharField(max_length=255    ,blank=True, null=True)
    accusative = models.CharField(max_length=255    ,blank=True, null=True)
    dative = models.CharField(max_length=255        ,blank=True, null=True)
    genitive = models.CharField(max_length=255      ,blank=True, null=True)
    gender = models.CharField(max_length=255        ,blank=True, null=True)
    n1e = models.CharField(max_length=255           ,blank=True, null=True )
    n2e = models.CharField(max_length=255           ,blank=True, null=True )
    n1 = models.CharField(max_length=255            ,blank=True, null=True )
    n2 = models.CharField(max_length=255            ,blank=True, null=True )
    a1e = models.CharField(max_length=255           ,blank=True, null=True )
    a2e = models.CharField(max_length=255           ,blank=True, null=True )
    a1 = models.CharField(max_length=255            ,blank=True, null=True )
    a2 = models.CharField(max_length=255            ,blank=True, null=True )
    d1e = models.CharField(max_length=255           ,blank=True, null=True )
    d2e = models.CharField(max_length=255           ,blank=True, null=True )
    d1 = models.CharField(max_length=255            ,blank=True, null=True )
    d2 = models.CharField(max_length=255            ,blank=True, null=True )
    g1e = models.CharField(max_length=255           ,blank=True, null=True )
    g2e = models.CharField(max_length=255           ,blank=True, null=True )
    g1 = models.CharField(max_length=255            ,blank=True, null=True )
    g2 = models.CharField(max_length=255            ,blank=True, null=True )
    
    image = models.ImageField(upload_to='noun_images')
    def getUrl(self, *args, **kwargs):
        return self.image.url
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.image.path)
        if img.height > 400 or img.width > 400:
            output_size = (400, 400)
            img.thumbnail(output_size)
            img.save(self.image.path)

class Verb(models.Model):
    verb = models.CharField(max_length=255      )
    meaning = models.CharField(max_length=255   )
    ich = models.CharField(max_length=255      ,blank=True, null=True )
    du = models.CharField(max_length=255       ,blank=True, null=True )
    es = models.CharField(max_length=255       ,blank=True, null=True )
    wir = models.CharField(max_length=255      ,blank=True, null=True )
    ihr = models.CharField(max_length=255      ,blank=True, null=True )
    sie = models.CharField(max_length=255      ,blank=True, null=True )
    target1 = models.CharField(max_length=255  ,blank=True, null=True )
    target2 = models.CharField(max_length=255  ,blank=True, null=True )
    t1 = models.CharField(max_length=255       ,blank=True, null=True )
    t2 = models.CharField(max_length=255       ,blank=True, null=True )
    isMaster = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to='verb_images')
    def getUrl(self, *args, **kwargs):
        return self.image.url
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.image.path)
        if img.height > 400 or img.width > 400:
            output_size = (400, 400)
            img.thumbnail(output_size)
            img.save(self.image.path)

class Preposition(models.Model):
    preposition = models.CharField(max_length=255  ,unique=True     )
    meaning = models.CharField(max_length=255       )
    cases = models.CharField(max_length=255      ,blank=True, null=True   )
    target1 = models.CharField(max_length=255    ,blank=True, null=True   )
    target2 = models.CharField(max_length=255    ,blank=True, null=True   )
    image = models.ImageField(upload_to='preposition_images')
    def getUrl(self, *args, **kwargs):
        return self.image.url
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.image.path)
        if img.height > 400 or img.width > 400:
            output_size = (400, 400)
            img.thumbnail(output_size)
            img.save(self.image.path)

class SplitVerb(models.Model):
    verb = models.CharField(max_length=255      )
    english = models.CharField(max_length=255       )
    ich = models.CharField(max_length=255      ,blank=True, null=True )
    du = models.CharField(max_length=255       ,blank=True, null=True )       
    es = models.CharField(max_length=255       ,blank=True, null=True )
    wir = models.CharField(max_length=255      ,blank=True, null=True )
    ihr = models.CharField(max_length=255      ,blank=True, null=True )
    sie = models.CharField(max_length=255      ,blank=True, null=True )
    target = models.CharField(max_length=255   ,blank=True, null=True     )       
    target2 = models.CharField(max_length=255  ,blank=True, null=True     )
    cases = models.CharField(max_length=255    ,blank=True, null=True )
    image = models.ImageField(upload_to='verb_images')
    prepositions = models.ManyToManyField(Preposition)
    def getUrl(self, *args, **kwargs):
        return self.image.url
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.image.path)
        if img.height > 400 or img.width > 400:
            output_size = (400, 400)
            img.thumbnail(output_size)
            img.save(self.image.path)

class Adverb(models.Model):
    adverb = models.CharField(max_length=255        )
    meaning = models.CharField(max_length=255       )
    image = models.ImageField(upload_to='adverb_images/')
    def getUrl(self, *args, **kwargs):
        return self.image.url
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 500 or img.width > 500:
            output_size = (500, 500)
            img.thumbnail(output_size)
            img.save(self.image.path)

class Adjective(models.Model):
    adjective = models.CharField(max_length=255     )
    meaning = models.CharField(max_length=255       )
    denotion = models.CharField(max_length=255    ,blank=True, null=True  )
    ein = models.CharField(max_length=10          ,blank=True, null=True  )
    image = models.ImageField(upload_to='adjective_images/')
    def getUrl(self, *args, **kwargs):
        return self.image.url
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 500 or img.width > 500:
            output_size = (500, 500)
            img.thumbnail(output_size)
            img.save(self.image.path)

class Conjunction(models.Model):
    conjunction = models.CharField(max_length=255       )
    english = models.CharField(max_length=255           )
    type = models.CharField(max_length=255              )
    articles = models.CharField(max_length=255         ,blank=True, null=True )
    image = models.ImageField(upload_to='conjunction_images/')
    def getUrl(self, *args, **kwargs):
        return self.image.url
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 500 or img.width > 500:
            output_size = (500, 500)
            img.thumbnail(output_size)
            img.save(self.image.path)