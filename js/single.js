const setTheme=e=>document.documentElement.className=e;var themeColor=["red","blue","green","purple","yellow","gray","white","black","pink"];function delClass(e){$("#single strong").each(function(){$(this).removeClass("text-"+e+"-500")});for(var t=1;t<=6;t++)$("#single  h"+t).removeClass("text-"+e+"-500")}function toogClass(e){for(var t=1;t<=6;t++)$("#single  h"+t).toggleClass("text-"+e+"-500");$("#single strong").each(function(){$(this).toggleClass("text-"+e+"-500")})}$("#theme-select").on("change",function(){localStorage.setItem("theme",this.value),"night"==localStorage.getItem("dark-mode-storage")&&"default"==this.value?localStorage.setItem("theme","white"):"light"==localStorage.getItem("dark-mode-storage")&&"default"==this.value&&localStorage.setItem("theme","black"),$.each(themeColor,function(e,t){delClass(t),localStorage.getItem("theme")==t&&toogClass(t)})}),$(document).ready(function(){(null===localStorage.getItem("theme")&&(localStorage.setItem("dark-mode-storage","light"),localStorage.setItem("theme","black")),"black"==localStorage.getItem("theme")||"white"==localStorage.getItem("theme"))?$("#theme-select").val("default").prop("selected",!0):$("#theme-select").val(localStorage.getItem("theme")).prop("selected",!0);$.each(themeColor,function(e,t){localStorage.getItem("theme")==t&&toogClass(t)})});

 