from transformers import MarianMTModel, MarianTokenizer

def translate_text(text):
    model_name = "Helsinki-NLP/opus-mt-de-en"
    tokenizer = MarianTokenizer.from_pretrained(model_name)
    model = MarianMTModel.from_pretrained(model_name)

    # Tokenize the input text
    input_ids = tokenizer.encode(text, return_tensors="pt")

    # Translate the input text
    translated = model.generate(input_ids)

    # Decode the translated output
    translated_text = tokenizer.decode(translated[0], skip_special_tokens=True)
    
    return translated_text