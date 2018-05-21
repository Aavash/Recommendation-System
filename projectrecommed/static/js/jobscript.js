(function ($) {

    const API_ENDPOINT = 'http://localhost:8000/api';

    const jobService = {

        query(){
            return $.ajax({
                url:`${API_ENDPOINT}/recommend`,
                method:'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then((data)=>{
                return data;
            }).catch((e)=>{
                return new $.Deffered().reject(e).promise();
            });
        },
    }

    $(function () {
        fetchJobList();

        const $Jobs = $('#total-Job-list');

        
    });// end document ready


    function fetchJobList() {

        console.log("fetch vayo");

        jobService
            .query()
            .then(function (result) {
                $('#total-Job-list').find('tbody').loadTemplate(
                    $('#job-list-item-tpl'),
                    result
                )
            })
            .catch((e) => {
                console.log('error fetching job list');
            });
    }

}(jQuery))