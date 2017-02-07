capstone.factory("doctorFactory", function($http){
  return { getSpeciality : ()=>{
            $http.get (`speciality.json`)
             .then((data)=>{
                specialities =  data.data
                $('#autocomplete-inputSpeciality').autocomplete({
                data: specialities,
                limit: 10 // The max amount of results that can be shown at once. Default: Infinity.
                });

             })
          },
          getInsurance : ()=>{
            $http.get(`https://api.betterdoctor.com/2016-03-01/insurances?user_key=cc89a9786eb0b9f8f2a731a37cb8800e`)
              .then((data)=>{
                all_insurance = data.data.data
                var insurance = {}
                for (var key in all_insurance){
                  insurance[all_insurance[key].uid] = null
                }
                $('#autocomplete-inputInsurance').autocomplete({
                  data: insurance,
                  limit: 10 // The max amount of results that can be shown at once. Default: Infinity.
                  });
              })
          }


        }
})
