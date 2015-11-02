angular.module("app", [])
    .controller("mainctrl",
    function ($scope, $timeout) {
        //Initialize the switches to false.
        $scope.switches = {
            lamps: false
        }

        $scope.flipSwitch = function (switchName) {
            switch(switchName) {
                case 'lamps':
                    if ($scope.switches.lamps == true) {
                        $scope.switches.lamps = false;
                    }
                    else {
                        $scope.switches.lamps = true;
                    }
                    break;
              
                default:
                    alert('default');
            }
            console.log(switchName);
            console.log($scope.switches);
        }
        $scope.defaults = {
            navbar: [
                'Technologies',
                'Education',
                'Work History',
                'Certifications',
                'Contact & Hobbies',
            ],
            author: 'Goodson',
            mission: 'Design and Development'

        };

        // This sets the doors open variable to an empty string. So that the doors are closed when page loads.
        $scope.doorsOpen = false;

        // Function changes doorsOpen variable to activate the doors opening.
        $scope.activateDoors = function (content) {

            // If doors open variable is set, unset it.
            if ($scope.doorsOpen != '') {
                $scope.doorsOpen = '';

                // Wait 1.9 seconds for doors to close before reopen.
                $timeout(function () {
                    $scope.doorsOpen = content;
                }, 1900);
            }
            else {

                // Else open doors.
                $scope.doorsOpen = content;
            }



        };
    });