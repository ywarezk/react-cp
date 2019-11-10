import {Subject} from 'rxjs';

// const subject = new Subject();
// subject.next('hello world')
// message = hello world
// subject.subscribe((message) => {})

class MessageService {
    constructor() {
        // create some kind of communication channel
        // put the communication channel as property of the class
        this.messageChannel = new Subject();
    }
}

export default new MessageService();