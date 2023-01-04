
class student{
    static count=0
    constructor(name,age,phoneNumber,marks){
        this.name=name
        this.age=age
        this.phoneNumber=phoneNumber
        this.marks=marks
        student.count++
    }

    isEligibkle(){
        if(this.marks>=40){
            console.log(`${this.name} is eliguible`)
        }else{
            console.log(`${this.name} is not eliguible`)
        }
    }

     static totalNumberOfStudent(){
        console.log(student.count)
    }

    eligibleForPlacement(minimumMarks){
        return (miniAge) => {
            if(this.age>miniAge && this.marks>minimumMarks){
                console.log(this.name + " is eligible for placement")
            }
        }
     }

}


const student1=new student('vivek',25,123,78)
const student2=new student('kumbang',25,456,36)
const student3=new student('tonoy',25,789,76)
const student4=new student('pranit',24,741,55)
const student5=new student('rittick',25,963,65)

student1.eligibleForPlacement(40)(18)
student2.eligibleForPlacement(40)(18)
student3.eligibleForPlacement(40)(18)
student4.eligibleForPlacement(40)(18)
student5.eligibleForPlacement(40)(18)
