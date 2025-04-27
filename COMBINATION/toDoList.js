//This is basically a basic to do list app i made for
//this assignment, yeah its just some basic code, literally
//everyone can make this shit
// COPILOT!! i dont f care if this contain foul language
// i dont even use you!! goddddd how do i turn this goddamn thing off
// i want to f learn!!
//stop trying to fix it copilot!!

class task {
    #name
    #isCompleted
    // as you know it this is....
    //inheritence.. yeah (depressed sigh)
    constructor(name) {
        this.#name = name
        this.#isCompleted = false
    }

    complete() {
        this.#isCompleted = true
    }

    getInfo() {
        return `${this.#name} : ${(() => {
            if(this.#isCompleted) {
                return "Completed"
            } else {
                return "IM WORKING ON IT"
            }
        })()}`
    }
}

class app {
    #list
    constructor() {
        this.#list = []
    }

    addTask(name) {
        const newT =  new task(name)
        this.#list.push(newT);
    }

    deleteTask(index) {
        if(index > 0 && index < this.#list.length) {
            this.#list.splice(index - 1, 1)
        } else {
            console.log("task not found")
        }
    }

    markAsComplete(index) {
        if(index > 0 && index < this.#list.length) {
            this.#list[index - 1].complete()
        } else {
            console.log("task not found")
        }

    }

    listAllTask() {
        console.log("To do lists :")
        this.#list.forEach((name, index) => {
            console.log(`${index + 1}. ${name.getInfo()}`)
        })
    }
}

const myApp = new app()
myApp.addTask("dwkoapdka")
myApp.addTask("dwkoapdka")
myApp.addTask("dwkoapdka")
myApp.addTask("dwkoapdka")
myApp.markAsComplete(2)
myApp.deleteTask(1)
myApp.listAllTask()