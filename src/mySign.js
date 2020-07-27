async function signUp(myLogger){
	
	const { siteUtils, hostURL } = myLogger

	
	try{
		const $ = siteUtils.constructor.cheerioLoad((await siteUtils.sendGetRequest(hostURL)).body)
			, signTarget = $("a").toArray().find(e => /daily_attendance/.test($(e).attr("href")))
		
		const r = await siteUtils.sendGetRequest(`${hostURL}/${$(signTarget).prop("href")}`)
		
		if(/签到成功/.test(r.body))
			return Promise.resolve('簽到成功')
		else if(/请不要重新签到/.test(r.body))
			return Promise.resolve('已經簽到')
		else 
			return Promise.resolve(false)
	}
	catch(e){
		console.log('Sign Error: ' + e.message)
		return Promise.resolve(false)
	}
}

export default signUp