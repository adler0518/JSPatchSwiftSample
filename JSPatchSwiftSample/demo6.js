defineClass('JSPatchSwiftSample.Person', {
        play: function() {

            var data = self.fullName()
            console.log('fullName output: ' + data.toJS())
            self.setFullName("jspatch fullname")
            console.log('fullName output: ' + data.toJS())
            
//            console.log('someTypeProperty output: ' + Person.someTypeProperty())
//            Person.getSomeTypeProperty(22)
//            console.log('someTypeProperty output: ' + Person.someTypeProperty())
            
            console.log("new play function")

        },
            newTestFunc:function(){
                console.log("test")
            }
            }, {
            getSomeTypeProperty: function() {
                console.log("jspatch getSomeTypeProperty !!!!!")
                return 22
            },
            cPlay:function(){
                console.log("jspatch cPlay !!!!!")
            }
            }
)

/*
 protocol 不能重载其方法和属性，包括静态方法.类方法。class Person: FullyNamed
 2016-08-29 21:22:29.752 JSPatchSwiftSample[44697:643693] *** NSForwarding: warning: object 0x1063f6a28 of class 'JSPatchSwiftSample.Person' does not implement methodSignatureForSelector: -- trouble ahead
 Unrecognized selector +[JSPatchSwiftSample.Person jp_fixMethodSignature]
 
 必须将class Person: NSObject, FullyNamed 则就可以，原理同demo2。继承自NSObject的Swift类，其继承自父类的方法具有动态性，其他自定义方法、属性需要加dynamic修饰才可以获得动态性。
 getSomeTypeProperty无法重载，再次验证了static方法不能被重写的结论。demo3
 Person someTypeProperty: 10
 Person fullName: jinfeng.du
 2016-08-30 10:46:41.798 JSPatchSwiftSample[22745:1463219] JSPatch.log: fullName output: jinfeng.du
 2016-08-30 10:46:41.799 JSPatchSwiftSample[22745:1463219] JSPatch.log: fullName output: jinfeng.du
 2016-08-30 10:46:41.799 JSPatchSwiftSample[22745:1463219] JSPatch.log: new play function
 2016-08-30 10:46:41.800 JSPatchSwiftSample[22745:1463219] JSPatch.log: jspatch cPlay !!!!!
 2016-08-30 10:46:41.802 JSPatchSwiftSample[22745:1463219] JSPatch.log: test

 */