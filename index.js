  const getBaseConversionNumber = function(label){
    const faDigits = ['۱','۲','۳','۴','۵','۶','۷','۸','۹','۰'];
    const enDigits = ['1','2','3','4','5','6','7','8','9','0'];
    
    var whichDigit = {};
    
    switch(label){
      case 'fa':
        whichDigit[label] = faDigits;
      break;
      case 'en':
        whichDigit[label] = enDigits;
      break; 
      case 'all':
        whichDigit = {"fa" : faDigits, "en" : enDigits};
      break;
      default:
        whichDigit = [];
    }
    
    return whichDigit;
  }
  const CvnFromTo = function(fromDigits,toDigits,str){
    for(var i=0;i<toDigits.length;i++){
      const currentFromDigit = fromDigits[i];
      const currentToDigit = toDigits[i];
      const regex = new RegExp(currentFromDigit,'g');
      str = str.replace(regex, currentToDigit);
    }
    return str;
  }
  
  const convertDigits = function(to,str){
    const toCvn = (getBaseConversionNumber(to))[to];
    const allDigits = getBaseConversionNumber("all");
    
    delete allDigits[to];
    
    const Objkeys = Object.keys(allDigits);
    for(var i=0;i<Objkeys.length;i++){
      const currentKey = Objkeys[i];
      const fromCvn = allDigits[currentKey];
      str = CvnFromTo(fromCvn,toCvn,str)
    }
    return str;
  }
  const intUs = convertDigits("en","۹۸۷۶۵۴۳۲۱");
  console.log(intUs);