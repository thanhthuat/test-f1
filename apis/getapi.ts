import { data } from "constants/data";

export const apigetData = (url:string) => {
	
	return new Promise<any>((resolve, reject) => {
        try {
			const datarespone:any = data
			resolve(datarespone);
		} catch (error) {
			reject(error);
		}
           
	});
};