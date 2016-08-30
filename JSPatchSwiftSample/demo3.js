defineClass('JSPatchSwiftSample.ViewController', {
            
            
            }, {
            staticTestFunction: function(string) {
            console.log('JSPatch staticTestFunction output:!!!!!!!!!!!')
            },
            classTestFunction: function(string) {
            console.log('JSPatch classTestFunction output:!!!!!!!!!!!')
            }
            })

/*
 class写法的静态函数得到了替换。但是static写法的静态函数并没有得到替换。因此，如果想让Swift APP获得动态性，多用class的写法去描述静态函数。
 Origin Function: staticTestFunction Line: 62
 Static Fucntion output:demo3 !!!!!!!!!!
 2016-08-29 18:02:13.161 JSPatchSwiftSample[22274:319478] JSPatch.log: JSPatch classTestFunction output:!!!!!!!!!!!
 Origin Function: viewDidAppear Line: 37
 Test data output: testVariable
 Test data output: privateTestVariable
 */