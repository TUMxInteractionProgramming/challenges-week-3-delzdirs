
console.log('app is alive');
function switchchannel(channelname) {
    console.log('Tuning into channel ' + channelname);
    document.getElementById('name').innerHTML= channelname + ' <small>by</small> ' + '<a href="http://w3w.co/upgrading.never.helps" style="color:white" target="_blank"><strong> upgrading.never.helps</strong></a>'  ;
    $('li').removeClass('selected');
    $('li:contains(' + channelname + ')').addClass("selected"); 
}
function switchstar() {
    $('.star').attr( "src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
    
}
function togglestar() {
    $('.star').attr( "src", "http://ip.lfe.mw.tum.de/sections/star.png");
}
function selectTab(tabId) {
    $('button').removeClass('selected');
    $(tabId).addClass('selected');
    console.log('Changing to tab ' + tabId);
}
function toggleicons() {
    $('#emojis').toggle();
} 