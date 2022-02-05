export const userMock = {
    "data":{
        "id":12,
        "userInfos":{"firstName":"Mock","lastName":"Dovineau","age":31},
        "todayScore":0.19,
        "keyData":{"calorieCount":1930,"proteinCount":155,"carbohydrateCount":290,"lipidCount":50}}
    }

export const activityMock = {
    "data":{
        "userId":12,"sessions":[
        {"day":"2020-06-01","kilogram":80,"calories":240},{"day":"2020-06-02","kilogram":80,"calories":220},{"day":"2020-06-03","kilogram":81,"calories":280},{"day":"2020-06-04","kilogram":81,"calories":290},{"day":"2020-06-05","kilogram":80,"calories":160},{"day":"2020-06-06","kilogram":78,"calories":162},{"day":"2020-06-07","kilogram":76,"calories":390}]
        }
    }

export const averageMock = {
    "data":{"userId":18,"sessions":[{"day":1,"sessionLength":30},{"day":2,"sessionLength":40},{"day":3,"sessionLength":50},{"day":4,"sessionLength":30},{"day":5,"sessionLength":30},{"day":6,"sessionLength":50},{"day":7,"sessionLength":50}]}
}

export const performanceMock = {
    "data":{"userId":18,"kind":{"1":"cardio","2":"energy","3":"endurance","4":"strength","5":"speed","6":"intensity"},"data":[{"value":200,"kind":1},{"value":240,"kind":2},{"value":80,"kind":3},{"value":80,"kind":4},{"value":220,"kind":5},{"value":110,"kind":6}]}
}
