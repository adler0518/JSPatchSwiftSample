require('PersonModel')
defineClass('JSPatchSwiftSample.ViewController', {
            viewDidAppear: function(animated) {
            self.super().viewDidAppear(animated);
            var person = PersonModel.alloc().init();
            var data = person.name()
            console.log('name output: ' + data.toJS())

            var dis = person.dis()
            console.log('dis output: ' + dis.toJS())

            person.setName('JSPatch name')
            person.setDis('Private JSPatch dis')

            var data = person.name()
            console.log('name output: ' + data.toJS())
            
            var dis = person.dis()
            console.log('dis output: ' + dis.toJS())
            
            person.printDis()
            
            self.ORIGviewDidAppear(animated);
            }
            });

/*可以修改和使用并且修改OC的私有方法和属性*/