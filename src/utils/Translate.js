Ch_lang = function (TR_pagedata) {
  var languages = {
    1: {name: "Русский", prefix: 'ru', display: true},
    2: {name: 'English', prefix: 'en', display: true},
   
  };

  // if not found then this
  var defaultPhrase = "NO PHRASE"; 

  this.currentLang = 2; // Default lang

  // Language interface magic goes here 
  this.changeLangTo = function (in_idLang) {
    this.currentLang = in_idLang;
    var all_langEl = document.querySelectorAll('[data-id_phrase]');
    var el_len = all_langEl.length;
    for (var i = 0; i < el_len; i++) {
      var my_phrase = Tr_pagedata[all_langEl[i].dataset.id_phrase] ? Tr_pagedata[all_langEl[i].dataset.id_phrase][this.currentLang] : null;
      all_langEl[i].innerHTML = my_phrase ? my_phrase : defaultPhrase;
    }
    
    return true;
  };

  // Translates by id nj language in_idLang else returns default lang
  this.getPhrase = function (in_idPhrase, in_idLang) {
    in_idLang = in_idLang || this.currentLang;
    var my_phrase = Tr_pagedata[in_idPhrase] ? phrases[in_idPhrase][in_idLang] : null;

    return my_phrase ? my_phrase : defaultPhrase;
  };

};