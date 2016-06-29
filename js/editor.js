var $ = require('jquery');
require('jquery-ui');

var $editor = $("#editor");

var isOnFocusMode = false; // create a method to read this from a "settings.json" file

var jsPDF = require('jspdf');

$(function(){
  var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
  if (isMac) {
      $(".closeBtn").css({
        "position": "fixed",
        "left": "3px"
      });
      $("#menuButton, .menuBtn").css({
        "position": "fixed",
        "right": "3px"
      });
    } else {
      $(".closeBtn").css({
        "position": "fixed",
        "right": "3px"
      });
      $("#menuButton, .menuBtn").css({
        "position": "fixed",
        "left": "3px"
      });
    }
});

$(function(){
  $(editor).prop('contentEditable', true);

  $("#h1").bind("click", function(){
    document.execCommand("formatBlock", false, "h1");
  });

  $("#h2").bind("click", function(){
    document.execCommand("formatBlock", false, "h2");
  });

  $("#h3").bind("click", function(){
    document.execCommand("formatBlock", false, "h3");
  });

  $("#p").bind("click", function(){
    document.execCommand("formatBlock", false, "p");
  });

  $("#bold, #bold2").bind("click", function(){
    document.execCommand("bold", false, false);
  });

  $("#italic, #italic2").bind("click", function(){
    document.execCommand("italic", false, false);
  });

  $("#underline, #underline2").bind("click", function(){
    document.execCommand("underline", false, false);
  });

  $("#jl").bind("click", function(){
    document.execCommand("justifyLeft", false, false);
  });

  $("#jc").bind("click", function(){
    document.execCommand("justifyCenter", false, false);
  });

  $("#jr").bind("click", function(){
    document.execCommand("justifyRight", false, false);
  });

  $("#jf").bind("click", function(){
    document.execCommand("justifyFull", false, false);
  });

  $("#cblack").bind("click", function() {
    document.execCommand("foreColor", false, "black");
  });

  $("#cred").bind("click", function() {
    document.execCommand("foreColor", false, "red");
  });

  $("#cdarkcyan").bind("click", function() {
    document.execCommand("foreColor", false, "darkcyan");
  });

  $("#cwhite").bind("click", function() {
    document.execCommand("foreColor", false, "white");
  });

  $("#openFileCloseBtn").bind("click", function() {
    $("#openFileDialog").hide();
  });

  $("#saveFileCloseBtn").bind("click", function() {
    $("#saveFileDialog").hide();
  });

  $("#undo").bind("click", function(){
    document.execCommand("undo", false, false);
  });

  $("#redo").bind("click", function(){
    document.execCommand("redo", false, false);
  });

  $("#bulletPoints").bind("click", function(){
    document.execCommand("insertUnorderedList", false, false);
  });

  $("#numberPoints").bind("click", function(){
    document.execCommand("insertOrderedList", false, false);
  });

  $("#settingsBtn").bind("click", function(){
    $(".settingsDiv").toggle("show");
  });

  $("#settingsDivCloseBtn").bind("click", function(){
    $(".settingsDiv").hide();
  });

  $("#insTableBtn").bind("click", function(){
    insertTable();
  });

  /*$("#dp1").bind("click", function(){
    myFunction();
  });

  $("#dp2").bind("click", function(){
    myFunction2();
  });*/

var zoom = 1.0; // put this and the key events in a better place (separate from general shortcuts)

  $(document).bind('keydown', function(event) {
    $("#floatFormatBox").hide();
    if (event.ctrlKey || event.metaKey) {
      /*if(event.keyCode == '189') {$("#editor").animate({ 'zoom': (zoom - 0.1) }, 50); $(".floatingTableTools").animate({ 'zoom': (zoom - 0.1) }, 50); zoom = zoom - 0.1; }
      if(event.keyCode == '187') {$("#editor").animate({ 'zoom': (zoom + 0.1) }, 50); $(".floatingTableTools").animate({ 'zoom': (zoom - 0.1) }, 50); zoom = zoom + 0.1; }*/
      switch (String.fromCharCode(event.which).toLowerCase()) {
        case 's':
          event.preventDefault();
          //__save();
          testSave(); // new system save file dialog
          break;
        case 'o':
          event.preventDefault();
          //__open();
          testOpen(); // new system file chooser dialog
          break;
        case 'd':
          event.preventDefault();
          toggleNoDistractionMode();
          break;
        case 'p':
          event.preventDefault();
          _printFile();
          break;
        case '1':
          event.preventDefault();
          document.execCommand("formatBlock", false, "h1");
          break;
        case '2':
          event.preventDefault();
          document.execCommand("formatBlock", false, "h2");
          break;
        case '3':
          event.preventDefault();
          document.execCommand("formatBlock", false, "h3");
          break;
        case '0':
          event.preventDefault();
          document.execCommand("formatBlock", false, "p");
          break;
        /*case 't':
          event.preventDefault();
          saveSession();
          break;*/
        }
    }
  });

});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(e) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;

  for (i = 0; i < dropdowns.length; i++) {
    var dpdown = dropdowns[i];
    if (dpdown.style.visibility !== 'null' && dpdown.style.display !== 'none'){
      var container = $('.dropdown-content');
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0 && !$(".dropbtn").is(e.target))  {
            dpdown.classList.remove('show');
      }
    }
  }
}

function toggleNoDistractionMode(){
  if (isOnFocusMode){
    $(".toolBar").show();
    $('.editor').css('box-shadow', "0 0 0.5cm rgba(0, 0, 0, 0.3)");
    $('.editor').css('margin-top', "2cm");
  } else {
    $(".toolBar").hide();
    $('.editor').css("box-shadow", "0 0 0 rgba(0,0,0,0)");
    $('.editor').css('margin-top', "0");
  }

  isOnFocusMode = !isOnFocusMode;
}

$(".editor").ondrop = function (e) {
  e.preventDefault();

  for (var i = 0; i < e.dataTransfer.files.length; ++i) {
    // console.log(e.dataTransfer.files[i].path);
    var dragFilepath = e.dataTransfer.files[i].path;
    if (dragFilepath.indexOf(".txt") > -1){
      openViaPath(dragFilepath, false);
    } else {
      alert("File type unsupported. If it is a picture, please use ctrl+c and ctrl+v or wait for a new decent version.");
    }
  }
  return false;
};

function isItOnFocusMode() {return isOnFocusMode;}

function useToolbarBackgorund(path, use){
  if (use) $(".headerBar").css("background-image", "url('" + path +"')");
  else $(".headerBar").css("background-image", "");
}

var floatOpen = false;
var lastText = null;
var text = null;

// Float box opening function

$(window).bind("mouseup", function(e){

  if (floatOpen){ // if float menu is open

    var container = $("#floatFormatBox");

    if (!container.is(e.target) // if clicked outside
        && container.has(e.target).length === 0) {$("#floatFormatBox").hide();}
    floatOpen = false;
  }

  var ed = $("#editor");
  if(!ed.is(e.target) && ed.has(e.target).length === 0) {lastText=""; return};

  if (window.getSelection) text = window.getSelection().toString();
  // else if (document.selection && document.selection.type != "Control") text = document.selection.createRange().text;
  else return;

  if (text == "" || text == null) {lastText=""; return};
  if (lastText == text) {
    floatOpen = false;
    $("#floatFormatBox").hide();
    lastText = ""; // word unselected, so text is empty now
    return;
  }

  lastText = text;

  /*
    Does not support scrolling

    var sel = window.getSelection();
    var r = sel.getRangeAt(0).getBoundingClientRect();

    $("#floatFormatBox").css( {position:"absolute", top:r.top - 40, left: r.left});

  */

  $("#floatFormatBox").css( {position:"absolute", top:e.pageY - 40, left: e.pageX});

  $("#floatFormatBox").show();
  floatOpen = true;
});

function clearSelection() {
  if ( document.selection ) {
    document.selection.empty();
  } else if ( window.getSelection ) {
    window.getSelection().removeAllRanges();
  }
}

// Ask for saving before closing
// PLEASE IMPROVE THIS IMEDIATELY

var quitTimes = 0;

window.onbeforeunload = confirmExit;
function confirmExit() {
    if (needFilename() == true && quitTimes <= 0) {
      return("You haven't saved your work. Sure you wanna quit? Quit again for yes");
      quitTimes++;
    }
};

// PDF generator (not working)

function generatePDF(){
  var doc = new jsPDF();
  var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
  };

  doc.fromHTML($('#editor').html(), 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
  doc.save('sample-file.pdf');
}

// menu button on click

$(function(){
  $("#advTools").hide();
  $("#advFormatTools").hide();

  $("#menuButton").bind("click", function(){
    if($("#advTools").is(":visible")) $("#advTools").hide(150);
    else $("#advTools").show(150);
  });

});

// Toggle advanced formatting tools (font family, size...)

function toggleAdvFormat(){
  if($("#advFormatTools").is(":visible"))
  {
    $("#advFormatTools").hide(100);
    $("#advFormatToolsBtnImg").css("-webkit-transform", "rotate(360deg)");

  } else {
    $("#advFormatTools").show(100);
    $("#advFormatToolsBtnImg").css("-webkit-transform", "rotate(180deg)");
  }
}

 // Font selector

$(function(){
  $("#fontFamilySelection").change(function(){
    document.execCommand("fontName", false, $("#fontFamilySelection").val());
  });

  $("#fontSizeBox").change(function(){
    document.execCommand("foreSize", false, $("#fontSizeBox").val());
  });

  $(editor).on("mouseup", function(){
    var font = document.queryCommandValue("FontName");
    font = font.replace("'", "").replace("'", "");
    $("#fontFamilySelection").val(font);
    var size = document.queryCommandValue("FontSize");
    $("#fontSizeBox").val(size);
  })
});

function testResize(){
  console.log("test");
  while(!$("#editor").is(":entireonscreen")){
    $("#editor").animate({ 'zoom': (zoom - 0.1) }, 50); zoom = zoom - 0.1;
  }
};

window.onbeforeunload = function(){
  saveSession();
  setSettings();
}

$(function(){
  recoverSession();
});

function insertTable(){
  document.execCommand("insertHTML", false, "<table border='1'><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td></tr></table>");
}

var lastClickedTable;

$(function(){
  $(window).bind("click", function(e){
    /*console.log(e.target.tagName.toString());
    console.log(e.target.tagName === "TD");*/

    if(e.target.class == "tableBtn") return;

    if(e.target.tagName === "TD") {
      lastClickedTable = $(e.target).closest("table");
      //console.log($(test).offset().top);
      $(".floatingTableTools").show();
      $(".floatingTableTools").css({position: "absolute", top: $(lastClickedTable).offset().top - 40, right: 0, left: 0, margin: "auto"});
    } else {
      $(".floatingTableTools").hide();
    }
  });
});

/* Table functions */

$(function(){
  $("#addRowBtn").bind("click", function(e){
    $(lastClickedTable).append("<tr><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td></tr>");
  });
});
