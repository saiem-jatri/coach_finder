export default {
    registerCoach(context,data){
        const coachData={
            id:context.rootGetters.userId,
            firstName:data.fist,
            lastName:data.last,
            description:data.desc,
            hourlyRate: data.rate,
            areas:data.areas
        }
        context.commit('registerCoach',coachData);
    }
}