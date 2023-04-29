// alert("hello naman")
let app = angular.module("myApp", [])
const url = "https://www.mohfw.gov.in/data/datanew.json"
let total_case = 0
let new_cured = 0
let deaths = 0
let stotal_case = 0
let snew_cured = 0
let sdeaths = 0

app.controller(
    "myctrl",
    ($scope, $http) => {
        $scope.title = "Stay home stay safe"
        $scope.changeValue = () => {
            $scope.title = "change "
        }
        // $scope.state="Gujarat"
        $http.get(url).then(
            (res) => {
                res.data.forEach((e) => {
                    if (e.state_name !== "") {
                        new_cured += parseInt(e.new_cured)
                        deaths += parseInt(e.new_death)
                        total_case += parseInt(e.new_positive)
                    }

                })

                $scope.total_case = total_case
                $scope.deaths = deaths
                $scope.new_cured = new_cured
            },
            (err) => {
                console.log(err)
            }
        )
        $scope.getStateData = () => {
            console.log($scope.state)
            snew_cured = 0
            sdeaths = 0
            stotal_case = 0
            if ($scope.state === "") {
                return
            }

            $http.get(url).then(
                (res) => {
                    res.data.forEach((e) => {
                        if (e.state_name.replaceAll('*', '').toUpperCase() === $scope.state.toUpperCase()) {
                            console.log(e.state_name)
                            snew_cured += parseInt(e.new_cured)
                            sdeaths += parseInt(e.new_death)
                            stotal_case += parseInt(e.new_positive)
                        }

                    })
                    console.log(snew_cured)
                    console.log(sdeaths)
                    console.log(stotal_case)
                    $scope.stotal_case = stotal_case
                    $scope.sdeaths = sdeaths
                    $scope.snew_cured = snew_cured
                },
                (err) => {
                    console.log(err)
                }
            )
        }


    }
)


