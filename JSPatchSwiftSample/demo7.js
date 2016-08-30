defineClass('JSPatchSwiftSample.Pure', {
fun: function() {
console.log('NEW static fun.')
},

pfun: function() {

console.log('NEW class fun.')
}
});


/*
纯Swift类没有动态性。
2016-08-29 21:40:16.743 JSPatchSwiftSample[46962:682930] *** NSForwarding: warning: object 0x10cc4dbe8 of class 'JSPatchSwiftSample.Pure' does not implement methodSignatureForSelector: -- trouble ahead
Unrecognized selector +[JSPatchSwiftSample.Pure jp_fixMethodSignature]
*/