const initState = {
	educations: [
		{
			major: 'Information Techlonogy',
			university: 'Military Technical Academy',
			time: '2015-2017',
			left: true
		},
		{
			major: 'Information Techlonogy',
			university: 'University of Engineering and Technology - VNU',
			time: '2017-2022',
			left: false
		}
	],
	works: [
		{
			major: 'Intern',
			university: 'Teko Vietnam Technology JSC',
			time: '06/2019 - 02/2020',
			left: true
		},
		{
			major: 'Software Engineer',
			university: 'Vingroup Advanced Analytics (Vantix Inc.)',
			time: ' 09/2020 - 02/2021',
			left: false
		},
		{
			major: 'Software Engineer',
			university: 'Viettel High Technology Industries Corporation',
			time: '04/2021 - 07/2021',
			left: true
		},
		{
			major: 'Software Engineer',
			university: 'Punch Entertainment Vietnam Co., Ltd',
			time: '08/2021 - present',
			left: false
		}
	]
}

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'educations/getList':
			return state.educations
		default:
			return state
	}
}
export default rootReducer
