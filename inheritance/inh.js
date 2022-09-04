
class NotificationSender {
    constructor(status) {
        this.status = status;
 
    }
 
        sendNotification(notification) {
            console.log('Sending: ' +notification)
        
        }
        
        findUsersWithStatus(status) {
            let users = getUsers(status);
            return users;
   }
}


class PromotionSender extends NotificationSender {
    constructor(status) {
        super(status);

    }


calculateDiscount(status) {
    if(status === 'GOlD') {

    return .3;
}
else if(status === 'Silver'){
    return .15;
}
return 0;
}
}
class CollectionSender extends NotificationSender {
    constructor(status) {
        super(status);

    }
    calculateFee(status){
        if(status === 'OVERDUE') {
            return 10;
        } else if(status === 'DELIQUENT') {
            return 25;
        } 
       return 5;
    }
}


let collectionSender = new CollectionSender('OVERDUE');
collectionSender.sendNotification('this is a test collections notification');