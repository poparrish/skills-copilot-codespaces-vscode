function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'app/views/skills-member.html',
        controller: 'skillsMemberCtrl',
        controllerAs: 'skillsMemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}