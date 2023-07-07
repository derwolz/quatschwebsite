# Work Update 06/01/23
Hallo Alles, thank you for checking in. The last week has been a busy, but there is a ton of work being done. I discovered that the cards need a slight retweak in order to fit into InDesign due to manufacturer's specifications. Besides that, Work has started on a phone application that can be used in conjunction with the game. 
## Phone App plans
### WILL have:
proper sentence construction and easy Language translation via QR code scanning on the back of the cards.
### SHOULD have:
Detect errors so players can see if what the order of the cards is valid.
### MIGHT have:
Automatic Pronunciation - The plan is to have use voice synthesis so the app can pronounce the entire sentence once it is constructed. It would also have the ability to pronounce single scanned cards.
## Roadmap
* QR scanner
* Sentence Parsing
* English Translation
* Prettifying the application
* Submission to Google, and Apple application stores
### Bonus options on application
#### Error Detection
This is likely the most difficult part. The sentences are easy enough to build but this requires not only a deep understanding of the rules, but also checks to make sure that they are obeyed. Right now the algorithm is placement agnostic, if you have two verbs and three nouns, it doesn't matter where they are placed in the sentence. The algorithm will be correct as long as the number of cards matches, and sometimes even if they don't. For example, according to the rules on the cards, you cannot place "Ich will zeigen", or "Ich zeige dir". These is a valid sentences, but the rules say nothing about the usage. Zeigen takes the II and III cases, so the  cards expect both.  I would like there to be some fluidity like this with the application so it doesn't try to teach that this is wrong, and it will reward the application users. The simplest answer with a complicated method is to train a NLP model to detect valid and invalid sentences, pass the German in and have it give a yes no response.
Most mistakes in sentence construction are noun gender, case, conjugation, word order, adjective endings and prepositions. The cards are explicit on all of these currently except preposition. So most errors in sentence construction should be easy. Prepositions are the most difficult to tackle since prepositions are often used differently in every language. For example, Playing in the street in German means you are literally inside of the street and will lead to confusion or using an instead of über when crossing a bridge. Not to mention transitive vs intransitive. But that is outside the scope of this game.
#### Pronunciation
The plan here would be to use the parsed German sentence and pass it to a trained Speech model that would be able to make every sentence sound natural. There is also a second feature to this where a user could either click on a single card or rescan a single card to get its translation. this would mean verbs would get a pronunciation wheel where the 6 conjugations could be selected or selecting an article, which means the application needs to be able to correctly place the s with des/s