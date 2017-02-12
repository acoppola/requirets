define([
    'app'
], function (app) {
    angular.module('newchats', []);
    var NewChatsCtrl = (function () {
        function NewChatsCtrl(Chats) {
            this.Chats = Chats;
            this.inject = ['Chats'];
            this.chats = Chats.all();
        }
        NewChatsCtrl.prototype.remove = function (chat) {
            this.Chats.remove(chat);
        };
        return NewChatsCtrl;
    }());
    var NewChatsDetailCtrl = (function () {
        function NewChatsDetailCtrl(Chats, $stateParams) {
            this.Chats = Chats;
            this.$stateParams = $stateParams;
            this.$inject = ['Chats', '$stateParams'];
            this.chat = Chats.get($stateParams['chatId']);
        }
        ;
        return NewChatsDetailCtrl;
    }());
    angular.module('newchats').controller('NewChatsCtrl', NewChatsCtrl);
    angular.module('newchats').controller('NewChatsDetailCtrl', NewChatsDetailCtrl);
});
