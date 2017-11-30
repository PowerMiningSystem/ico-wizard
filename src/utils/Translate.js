Ch_lang = function (TR_pagedata) {
  var languages = {
    1: {name: "Русский", prefix: 'ru', display: true},
    2: {name: 'English', prefix: 'en', display: true},
   
  };

  // if not found then this
  var defaultPhrase = "NO PHRASE"; 

  this.currentLang = 2; // Default lang

  // Language interface magic goes here 
  

  // Translates by id nj language in_idLang else returns default lang
  this.getPhrase = function (in_idPhrase, in_idLang) {
    in_idLang = in_idLang || this.currentLang;
    var my_phrase = Tr_pagedata[in_idPhrase] ? phrases[in_idPhrase][in_idLang] : null;

    return my_phrase ? my_phrase : defaultPhrase;
  };

};