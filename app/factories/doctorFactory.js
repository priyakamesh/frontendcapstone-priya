capstone.factory("doctorFactory", function($http){
  var doctorList;
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
          },
          getuserSpeciality :(user_speciality)=>{
            return userSpeciality = user_speciality
          },
          getuserInsurance : (user_insurance)=>{
            return userInsurance = user_insurance
          },
          getZipcode: (zipcode)=>{
            return userZipcode = zipcode
          },
          getDoctorlist : ()=>{

            return $http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${userZipcode}&key=AIzaSyCrXqSQFiIX6Xvdz6LEgxHHL9ERKyToE40`)
                    .then((data)=>{
                      lat = data.data.results[0].geometry.location.lat
                      long = data.data.results[0].geometry.location.lng
                      console.log(lat , long)
                      return $http.get(`https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${userSpeciality}&insurance_provider=${userInsurance}&location=${lat}%2C${long}%2C5&skip=0&limit=10&user_key=cc89a9786eb0b9f8f2a731a37cb8800e`)

                    }).then((data)=>{
                        return doctorList = data.data.data

                      })
          },
          getDoctor: ()=>{
            return doctorList
          }


        }
})
