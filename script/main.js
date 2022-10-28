$('.header-burger').click( function(e) {
    e.preventDefault();
      $('.header-links').slideToggle();
      $('.body').toggleClass('over');
    });

    $('.header-item').click( function() {
        $('.header-links').slideToggle();
          $('.body').removeClass('over');
        });

$('.popupbtn').click( function(e) {
    e.preventDefault();
      $('.overlay').fadeIn();
    });
    
        // Закрытие окна на крестик
        $('.close-popup').click( function() {
          $('.overlay').fadeOut();
        });
        
        // Закрытие окна на поле
        $(document).mouseup( function (e) { 
          var popup = $('.popup');
          if (e.target != popup[0] && popup.has(e.target).length === 0){
            $('.overlay').fadeOut();
          }
        });
let n = $('#test').text().replace(/\D/g,'');

function separateNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); 
  //разделитель можно задать тут вторым аргументом для метода replace. Сейчас, как видно, пробел
}

$({numberValue: n}).animate({numberValue: 5}, {
   duration: 60000,
   easing: "linear",
   step: function(val) {
      $('#test').text(separateNumber(Math.round(val)));
   }
});
let n2 = $('#test2').text().replace(/\D/g,'');

function separateNumber(x2) {
  return x2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); 
  //разделитель можно задать тут вторым аргументом для метода replace. Сейчас, как видно, пробел
}

$({numberValue: n2}).animate({numberValue: 5}, {
   duration: 60000,
   easing: "linear",
   step: function(val) {
      $('#test2').text(separateNumber(Math.round(val)));
   }
});
function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}
const monthNames = ["Января", "Февраля", "Март", "Апреля", "Мая", "Июня",
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
];
/* функция получения текущей даты и времени */
function date_time()

{
   
    var current_datetime = new Date()
   
    var day = zero_first_format(current_datetime.getDate()+1);
    var month = zero_first_format(monthNames[current_datetime.getMonth()]);
   
   
    return day+"  "+month;
    
}


/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
document.getElementById('current_date_time_block').innerHTML = date_time();



function getSecondsToTomorrow() {
    let now = new Date();
  
    // завтрашняя дата
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let diff = tomorrow - now; // разница в миллисекундах
    return Math.round(diff / 1000); // преобразуем в секунды
  }


  var tomorrow = new Date().setHours(24, 0, 0);

  (function foo() {
    var now = new Date();
    var dd =  (tomorrow - tomorrow);
    // Сколько секунд осталось до завтра.
    var seconds = parseInt(tomorrow - now) / 1000 ;
  
    // 3600 - кол-во секунд в часе. Сколько часов осталось до завтра
    var hh = parseInt( seconds / 3600 );
  
   //
    var mm = parseInt( (seconds % 3600) / 60 );
  
    var ss = parseInt( (seconds % 3600) % 60 );
  
    document.getElementById('reg__right-days').innerHTML = dd;
    document.getElementById('reg__right-hours').innerHTML = hh;
    document.getElementById('reg__right-minute').innerHTML =  mm;
    document.getElementById('reg__right-seconds').innerHTML =  ss ;
    setTimeout(foo, 1000);
  })();
   $('a[href^="#"]').click(function(){ // #1
let anchor = $(this).attr('href');  // #2
$('html, body').animate({           // #3
scrollTop:  $(anchor).offset().top  // #4
}, 600);                            // #5
});
let n3 = $('#test3').text().replace(/\D/g,'');

function separateNumber(x3) {
  return x3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); 
  //разделитель можно задать тут вторым аргументом для метода replace. Сейчас, как видно, пробел
}

$({numberValue: n3}).animate({numberValue: 5}, {
   duration: 60000,
   easing: "linear",
   step: function(val) {
      $('#test3').text(separateNumber(Math.round(val)));
   }
});
!function(factory) {
  "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function($) {
  var caretTimeoutId, ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua);
  $.mask = {
      definitions: {
          "9": "[0-9]",
          a: "[A-Za-z]",
          "*": "[A-Za-z0-9]"
      },
      autoclear: !0,
      dataName: "rawMaskFn",
      placeholder: "_"
  }, $.fn.extend({
      caret: function(begin, end) {
          var range;
          if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin, 
          this.each(function() {
              this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(), 
              range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), 
              range.select());
          })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(), 
          begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length), 
          {
              begin: begin,
              end: end
          });
      },
      unmask: function() {
          return this.trigger("unmask");
      },
      mask: function(mask, settings) {
          var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
          if (!mask && this.length > 0) {
              input = $(this[0]);
              var fn = input.data($.mask.dataName);
              return fn ? fn() : void 0;
          }
          return settings = $.extend({
              autoclear: $.mask.autoclear,
              placeholder: $.mask.placeholder,
              completed: null
          }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length, 
          firstNonMaskPos = null, $.each(mask.split(""), function(i, c) {
              "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])), 
              null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
          }), this.trigger("unmask").each(function() {
              function tryFireCompleted() {
                  if (settings.completed) {
                      for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++) if (tests[i] && buffer[i] === getPlaceholder(i)) return;
                      settings.completed.call(input);
                  }
              }
              function getPlaceholder(i) {
                  return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
              }
              function seekNext(pos) {
                  for (;++pos < len && !tests[pos]; ) ;
                  return pos;
              }
              function seekPrev(pos) {
                  for (;--pos >= 0 && !tests[pos]; ) ;
                  return pos;
              }
              function shiftL(begin, end) {
                  var i, j;
                  if (!(0 > begin)) {
                      for (i = begin, j = seekNext(end); len > i; i++) if (tests[i]) {
                          if (!(len > j && tests[i].test(buffer[j]))) break;
                          buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
                      }
                      writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
                  }
              }
              function shiftR(pos) {
                  var i, c, j, t;
                  for (i = pos, c = getPlaceholder(pos); len > i; i++) if (tests[i]) {
                      if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
                      c = t;
                  }
              }
              function androidInputEvent() {
                  var curVal = input.val(), pos = input.caret();
                  if (oldVal && oldVal.length && oldVal.length > curVal.length) {
                      for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;
                      if (0 === pos.begin) for (;pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;
                      input.caret(pos.begin, pos.begin);
                  } else {
                      for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;
                      input.caret(pos.begin, pos.begin);
                  }
                  tryFireCompleted();
              }
              function blurEvent() {
                  checkVal(), input.val() != focusText && input.change();
              }
              function keydownEvent(e) {
                  if (!input.prop("readonly")) {
                      var pos, begin, end, k = e.which || e.keyCode;
                      oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(), 
                      begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1), 
                      end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1), 
                      e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText), 
                      input.caret(0, checkVal()), e.preventDefault());
                  }
              }
              function keypressEvent(e) {
                  if (!input.prop("readonly")) {
                      var p, c, next, k = e.which || e.keyCode, pos = input.caret();
                      if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                          if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)), 
                          p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                              if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                                  var proxy = function() {
                                      $.proxy($.fn.caret, input, next)();
                                  };
                                  setTimeout(proxy, 0);
                              } else input.caret(next);
                              pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                          }
                          e.preventDefault();
                      }
                  }
              }
              function clearBuffer(start, end) {
                  var i;
                  for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
              }
              function writeBuffer() {
                  input.val(buffer.join(""));
              }
              function checkVal(allow) {
                  var i, c, pos, test = input.val(), lastMatch = -1;
                  for (i = 0, pos = 0; len > i; i++) if (tests[i]) {
                      for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) if (c = test.charAt(pos - 1), 
                      tests[i].test(c)) {
                          buffer[i] = c, lastMatch = i;
                          break;
                      }
                      if (pos > test.length) {
                          clearBuffer(i + 1, len);
                          break;
                      }
                  } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                  return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""), 
                  clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))), 
                  partialPosition ? i : firstNonMaskPos;
              }
              var input = $(this), buffer = $.map(mask.split(""), function(c, i) {
                  return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
              }), defaultBuffer = buffer.join(""), focusText = input.val();
              input.data($.mask.dataName, function() {
                  return $.map(buffer, function(c, i) {
                      return tests[i] && c != getPlaceholder(i) ? c : null;
                  }).join("");
              }), input.one("unmask", function() {
                  input.off(".mask").removeData($.mask.dataName);
              }).on("focus.mask", function() {
                  if (!input.prop("readonly")) {
                      clearTimeout(caretTimeoutId);
                      var pos;
                      focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {
                          input.get(0) === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos));
                      }, 10);
                  }
              }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
                  input.prop("readonly") || setTimeout(function() {
                      var pos = checkVal(!0);
                      input.caret(pos), tryFireCompleted();
                  }, 0);
              }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent), 
              checkVal();
          });
      }
  });
});
$(".phone_mask").mask("+7(999)999-99-99");
$(".mail_mask").inputmask("email");