/// <reference path="angularjs/angular.d.ts"/>
/// <reference path="portfolio.d.ts"/>
/// <reference path="app.ts"/>
// module portfolio.controllers {
'use strict';
define(["require", "exports"], function (require, exports) {
    var CardListCtrl = (function () {
        function CardListCtrl($scope) {
            this.$scope = $scope;
            $scope.cards = [
                {
                    "id": "fruity-tetris",
                    "title": "Fruity Tetris: Food and Bricks collide",
                    "thumbUrl": "img/fruity-tetris.thumb.jpg",
                    "detailsUrl": "details/fruity-tetris.json",
                    "tags": []
                }
            ];
        }
        CardListCtrl.$inject = ['$scope'];
        return CardListCtrl;
    })();
    exports.CardListCtrl = CardListCtrl;
    var CardDetailCtrl = (function () {
        function CardDetailCtrl($scope) {
            this.$scope = $scope;
            $scope.details = {
                "title": "Fruity Tetris: Food and Bricks Collide",
                "body": [
                    "Fruit Tetris, is a modification of tetris where instead of elements being destroyed only when a row is full, they are also destroyed when there is three of a color in a row... Don’t ask me why, I just followed the spec. It isn’t all that fun, but it does mess the rather incompatible game mechanics of tetris and the game \"falling fruits\".",
                    "It is implemented entirely in C++ using OpenGL 4.  This was a class project, and is part of a series of three projects.",
                    "My development environment was Arch Linux. Some people I know had a hard time compiling this on Ubuntu. This is because I used glfw3 instead of glut. I did this to learn more about OpenGL during the process, as glfw3 provides far fewer features, essentially just a windowed canvas to work in, delta time, and a few other tidbits. So you want to compile this you will need a version of glfw3, and you will have to link it yourself. In Arch this was just done for me by the almighty package manager pacman.",
                    "The main feature I made use of in this project was an interesting way of storing my board in memory. I kept the board as a two dimensional array of the tiles already on the board, and I kept the current block’s tiles separate. This allowed for many advantages. Firstly I could implement rotation and movement of the block through very simple matrix operations. Additionally, it vastly improved my representation of the block and board. I could pop the block off the board, determine if I would be allowed to place it back on the board after a movement, and then move it, or abort the movement if I could not. Lastly it allowed me to take diffs of the board, and merge diffs. That is correct, when I delete rows, or three of a kind, I can run all checks, merge the results, and then apply the diff to my board to remove the offending tiles. This also meant I could print the diff to my console. Ya, I can print the board in color, in my console, and tell what was supposed to happen without worrying about the render window at all."
                ]
            };
        }
        CardDetailCtrl.$inject = ['$scope'];
        return CardDetailCtrl;
    })();
    exports.CardDetailCtrl = CardDetailCtrl;
});
// }