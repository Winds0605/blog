# 构造器模式



**es5**

```js
function Student(name,gender,score){
	this.name = name
	this.gender = gender
	this.score = score
	this.quality = 100;
}

var whh = new Student('王花花','男',89)
var lsd = new Student('李双旦','女',98
```



**es6**

```js
class Student {
	constructor(name,gender,score){
		this.name = name
		this.gender = gender
		this.score = score
		this.quality = 100;
	}
}

var whh = new Student('王花花','男',89)
var lsd = new Student('李双旦','女',98)
```



# 原型模式

```js
function Student(name,gender,score){
	this.name = name
	this.gender = gender
	this.score = score
	this.quality = 100;
}

Student.prototype.sumScore = funtion(){
	return this.score + this.quality
}

var whh = new Student('王花花','男',89)
var lsd = new Student('李双旦','女',98)
```



# 构建器模式

```js
class Student {
}

class StudentBuilder {
	constructor(){
		this.student = new Student()
	}
	
	setName(name){
		this.student.name = name
	}
	
	setGender(gender){
		this.student.gender = gender
	}
	
	setHairLength(hairLength){
		this.student.hairLength = hairLength
	}
  
  build(){
    return this.student
  }
}

var student = new StudentBuilder()
student.name('王花花')
student.setGender('男')
student.setHairLength(2)

var whh = student.build()
```



# 工厂模式

```js
class Student{
	constructor(name,subjects){
		this.name = name
		this.subjects = subjects
	}
}

function factory(name,type){
	switch (type){
		case '文科'
			return new Student(name,['政治','地理','历史'])
			break;
		case '理科'
			return new Student(name,['化学','物理','生物'])
			break;
    case '体育'
			return new Student(name,['长跑','游泳','跳高'])
			break;
		default:
			throw '没有这个专业'
	}
}

var student1 = factory('一个学生','理科')
var student2 = factory('一个学生','文科')
var student3 = factory('一个学生','体育')
```



# 抽象模式

```js
class Student{
	this.intro = '我是个学生'
}

class Teacher{
	this.intro = '我是个老师'
}

function studentFactory(){
	return new Student()
}

function teacherFactory(){
	return new Teacher()
}

function userProducer(factory){
	switch (factory){
		case 'student':
			return studentFactory;
      break;
    case 'teacher':
      return teacherFactory;
      break;
    default:
      throw '没有这个工厂'
      break;
	}
}
```



# 单例模式

```js
class Resource {
	constructor(){
		this.balance = 100
	}
	if(Resource.instance){
		return Resource.instance
	}else{
		Resource.instance = this
	}
}
```

