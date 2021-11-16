// the code works aysnc ways
//for (var i = 0; i < 5; i++) {
//	setTimeout(function() { console.log(i); }, i * 1000 );
//}

// to have working results in the loop order in the async calls, setTimeout needs to be moved 
// under another method and called from for loop
function doSetTimeout(t) {
    setTimeout(function() { console.log(t); }, t * 1000);
}

for (var i = 0; i < 5; i++) {
    doSetTimeout(i);
}
