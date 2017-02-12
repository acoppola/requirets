define([
  'app'
], function (app) {
  angular.module('newchats',[]);

class NewChatsCtrl {
    public inject = ['Chats'];
    chats: any[];
    constructor(public Chats){
        this.chats = Chats.all();
    }
    remove(chat){
        this.Chats.remove(chat);
    }
}

class NewChatsDetailCtrl {
    public $inject = ['Chats','$stateParams'];
    chat: Object;
    constructor(public Chats:any, public $stateParams:ng.ui.IStateParamsService){
        this.chat = Chats.get($stateParams['chatId']);
    };
}

angular.module('newchats').controller('NewChatsCtrl', NewChatsCtrl);

angular.module('newchats').controller('NewChatsDetailCtrl',NewChatsDetailCtrl);

});
