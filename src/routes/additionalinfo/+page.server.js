import clientPromise from '$lib/db/db.js'

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const name = data.get("name");
        const mobileNo = data.get("phone");
        const isMahe = data.get("mahe");
        const dept = data.get("dept");
        console.log(name,mobileNo,isMahe,dept);
    }
}