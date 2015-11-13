angular.module("app", [])
    .controller("mainctrl",
    function ($scope, $timeout) {
        //Initialize the switches to false.
        $scope.switches = {
            lamps: false,
            doors: false
        };

        $scope.flipSwitch = function (switchName) {
            switch (switchName) {

                //Lamps
                case 'lamps':
                    if ($scope.switches.lamps == true) {
                        $scope.switches.lamps = false;
                    }
                    else {
                        $scope.switches.lamps = true;
                    }
                    break;

                //Doors
                case 'doors':
                    if ($scope.switches.doors == false) {
                        $scope.switches.doors = 'technologies';
                    }
                    else {
                        $scope.switches.doors = false;
                    }
                    break;

                //Music
                case 'music':
                    alert('Music Coming Soon');
                    break;

                default:
                    alert('default');
            }
            console.log(switchName);
            console.log($scope.switches);
        };

        $scope.defaults = {
            navbar: [
                'Technologies',
                'Education',
                'Work History',
                'Certifications',
                'Contact & Hobbies'
            ],
            author: 'Goodson',
            mission: 'Design and Development'

        };


        // Function changes doorsOpen variable to activate the doors opening.
        $scope.activateDoors = function (content) {

            // If doors open variable is set, unset it.
            if ($scope.switches.doors != '') {
                $scope.switches.doors = '';

                // Wait 1.9 seconds for doors to close before reopen.
                $timeout(function () {
                    $scope.switches.doors = content;
                }, 1900);
            }
            else {

                // Else open doors.
                $scope.switches.doors = content;
            }


        };
    });