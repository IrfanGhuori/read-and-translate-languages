function checkCompatibilty(){if(!("speechSynthesis" in window)){alert("Your browser is not supported. If google chrome, please upgrade!!")}}checkCompatibilty();var voiceOptions=document.getElementById("voiceOptions");var volumeSlider=document.getElementById("volumeSlider");var rateSlider=document.getElementById("rateSlider");var pitchSlider=document.getElementById("pitchSlider");var voiceMap=[];function loadVoices(){var a=speechSynthesis.getVoices();for(var b=0;b<a.length;b++){var d=a[b];var c=document.createElement("option");c.value=d.name;c.innerHTML=d.name;voiceOptions.appendChild(c);voiceMap[d.name]=d}}window.speechSynthesis.onvoiceschanged=function(a){loadVoices()};function speak(c){var a=$(c);var b=new SpeechSynthesisUtterance();b.volume=volumeSlider.value;b.voice=voiceMap[voiceOptions.value];b.rate=rateSlider.value;b.Pitch=pitchSlider.value;b.text=a.text();window.speechSynthesis.speak(b)};