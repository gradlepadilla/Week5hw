class Student {
    constructor(firstname, lastname, phonenumber, grade){
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.grade = grade;
    }

    introduce() {
        console.log(`${this.firstname} ${this.lastname} can be reached at ${this.phonenumber}`);

    }

}

let student1 = new Student('Tom', 'Sawyer', '899044', 'D');
let student2 = new Student('Alice', 'Heach','738393', 'A');


student1.introduce();
student2.introduce();