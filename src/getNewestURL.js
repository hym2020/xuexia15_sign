import request from 'request'


export default function(){
	return new Promise(resolve => {
		const req = request({
			url: "https://www.xuexia15.cc/"
		}, () => {
			resolve({
				hostURL: `https://${req.uri.hostname}`,
				hostname: req.uri.hostname
			})
		})	
	})
}