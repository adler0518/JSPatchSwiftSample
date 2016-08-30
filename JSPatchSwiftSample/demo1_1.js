require('PersonModel')
defineClass('JSPatchSwiftSample.PersonModel', {
            printName:function() {
            console.log('jspatch printName function');
            }
            }, {
            TestFucntion: function() {
            
            var person = PersonModel.alloc().init();
            var data = person.name()
            console.log('name output: ' + data.toJS())
            
            //            var dis = person.dis()
            //            console.log('dis output: ' + dis.toJS())
            
            person.setName('JSPatch name')
            //            person.setDis('Private JSPatch dis')
            
            var data = person.name()
            console.log('name output: ' + name.toJS())
            }
            });

/*无法执行，无法重新实现OC的类*/
