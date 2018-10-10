// Acordion Columns button Section
let accItem = document.getElementsByClassName('accordionItem');
let accHD = document.getElementsByClassName('accordionItemHeading');

  for (i = 0; i < accHD.length; i++) {
      accHD[i].addEventListener('click', toggleItem, false);
  }
  function toggleItem() {
      let itemClass = this.parentNode.className;
      for (i = 0; i < accItem.length; i++) {
         accItem[i].className = 'accordionItem close';
      }
      if (itemClass == 'accordionItem close') {
         this.parentNode.className = 'accordionItem open';
      }
  }

  // scroll to top when new accordion is clicked
  let timeOut;

    function accTop() {
    if (document.body.accTop != 0 || document.documentElement.accTop != 0) {
      window.scrollBy(0, -50);
      timeOut = setTimeOut('accTop', 10);
    }
    else clearTimeout(timeOut);
  }
