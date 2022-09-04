//*************** Andrew's HappyFood BBQ ****************

class Item {
    constructor(name) {
        this.name = name;
    }
}

class Order {
    constructor(name) {
        this.name = name;
        this.orders = [];
    }
}

class Menu {
     constructor() {
        this.orders = [];
        this.selectedOrder = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
            
        while (selection != 0) {
        switch(selection) {
                case '1':
                     this.showMenu();
                     break;
                case '2':
                     this.createHappyOrder();
                    break;
                case '3':
                    this.viewHappyFood();
                    break;
                case '4':
                    this.deleteOrder();
                    break;
                 case '5':
                    this.displayOrder();
                    break;
                default:
                    selection = 0;
             }
            selection = this.showMainMenuOptions();
          }
          alert('Have a Happy Day');
     }


        showMainMenuOptions() {
            return prompt(`
            Welcome to Andrew's Famous HappyFood BBQ! 
            Choose a Happy Item Below:
            -----------------------
            0) I don't want happy anymore *sad face*
            1) Show HappyFood Menu
            2) Create Happy Order
            3) Show Order
            4) Delete Order
            5) Display Order 
            `)
        }

        showOrderMenuOptions(orderInfo) {
            return prompt(`
            0) Back please
            1) Add another Choice
            2) Delete Choice
            ------------------------
            ${orderInfo}

            `);
        }

        showMenu() {
            alert(`
                                HappyFood Menu
                --------------------------------------------
                Food:                           Sides:
                -BBQ Burger                     -Cole Slaw
                -BBQ Slider                     -Mash Potatoes
                -Hawaiin Cheeseburger           -Grilled Veggies
                -Specialty BBQ Ribs             -Beans
                    `);

        }

        displayOrders(){
            let orderString = '';
            for(let i = 0; i < this.choice.length; i++) {
                orderString += i + ')' + this.orders[i].name + '\n';

            }
            alert(orderString);
        }
        
        createHappyOrder() {
            let name = prompt('Enter your order please');
            this.orders.push(new Order(name));
            this.selectedOrder = this.orders[this.orders.length-1]
            this.addItem();
            return prompt(`Thank you for your order, we are on it now! Have a happy day!`);
        }

        viewHappyFood() {
            let index = prompt('Input your order number (index) you wish to view');
            if(index > -1 && index < this.orders.length) {
                this.selectedOrder = this.orders[index];
                let desciption = 'Happy  Name: ' + this.selectedOrder.name + '\n';
                
                
                for (let i = 0; i < this.selectedOrder.items.length; i++) {
                    desciption += i + ') ' 
                    + this.selectedOrder.items[i].name + ' - ' + '\n';

                }

                let selection = this.showOrderMenuOptions(description);
                switch(selection) {
                    case '1':
                        this.addItem();
                        break;
                    case '2':
                        this.deleteItem();
                        break;
                }
            }
        }

        deleteOrder(){
            let index = prompt('Which HappyFood item would you wish to delete?:');
            if (index > -1 && index < this.orders.length) {
                this.orders.splice(index, 1);
                alert('Your order has been succesfully deleted');
            }
        }
        addHappyFood() {
            let name = prompt(`Add the following: 
            Food:                           Sides:
                -BBQ Burger                     -Cole Slaw
                -BBQ Slider                     -Mash Potatoes
                -Hawaiin Cheeseburger           -Grilled Veggies
                -Specialty BBQ Ribs             -Beans`);
            this.selectedOrder.items.push(new HappyFood(name));
        }

        deleteHappyFood(){
            let index = prompt('What is the order index or item you wish to delete? :');
            if (index > -1 && index < this.selectedOrder.items.length){
                this.selectedOrder.items.splice(index,1);

            }
        }
    }

    let menu = new Menu();
    menu.start();
