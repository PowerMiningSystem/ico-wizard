export const defaultState = { 
	contracts: { 
		token: {}, 
		crowdsale: {addr:[], abiConstructor:[]},
		pricingStrategy: {addr:[], abiConstructor:[]},
		multisig: {},
		nullFinalizeAgent: {addr:[]},
		finalizeAgent: {addr:[]},
		tokenTransferProxy: {}
	}, 
	token: {
		name: '',
		ticker: '',
		supply: 0,
		decimals: '',
		reservedTokens: [],
		reservedTokensElements: [],
		reservedTokensInput: {dim: "tokens"}
	},
	crowdsale: [{
		startTime: '',
		endTime: '',
		walletAddress: '',
		supply: '',
		whitelist: [], 
		whiteListElements: [], 
		whiteListInput: {}
	}],
	pricingStrategy: [{rate: ''}],
	blockTimeGeneration: 17,
	compilerVersion: "0.4.11",
	optimized: true,
	contractName: "MintedTokenCappedCrowdsaleExt",
	contractType: "white-list-with-cap",
	contractTypes: {
		standard: "standard",
		capped: "capped",
		whitelistwithcap: "white-list-with-cap"
	}
}

export const TRUNC_TO_DECIMALS = {
	DECIMALS18: -18
}

export const GAS_PRICE = 5000000000

export const NAVIGATION_STEPS = {
	CROWDSALE_CONTRACT: 'Crowdsale Contract',
	TOKEN_SETUP: 'Token Setup',
	CROWDSALE_SETUP: 'Crowdsale Setup',
	PUBLISH: 'Publish',
	CROWDSALE_PAGE: 'Crowdsale Page'
}


export const VALIDATION_MESSAGES = {
	TIER: 'Please enter a valid tier name between 1-30 characters',
	NAME: 'Please enter a valid name between 1-30 characters',
	TICKER: 'Please enter a valid Ticker that is less than three characters',
	SUPPLY: 'Please enter a valid number greater than 0',
	DECIMALS: 'Please enter a number greater than or equal to zero',
	WALLET_ADDRESS: 'Please enter a valid address',
	START_TIME: 'Please enter a valid date later than now',
	END_TIME: 'Please enter a valid date later than start time',
	RATE: 'Please enter a valid number greater than 0'
}

export const TEXT_FIELDS = {
	NAME: 'Name',
	TICKER: 'Ticker',
	SUPPLY: 'Supply',
	DECIMALS: 'Decimals',
	RATE: 'Rate',
	WALLET_ADDRESS: 'Wallet Address',
	START_TIME: 'Start Time',
	END_TIME: 'End Time',
	CROWDSALE_SETUP_NAME: 'Crowdsale setup name',
	ADDRESS: 'Address',
	MIN: 'Min',
	MAX: 'Max',
	MINCAP: 'Investor min cap',
	DIMENSION: 'Dimension',
	VALUE: 'Value',
	MAX_CAP: 'Max cap',
	ALLOWMODIFYING: 'Allow modifying',
	DISABLEWHITELISTING: 'Disable whitelisting'
}

export const VALIDATION_TYPES = {
	VALID: "VALIDATED",
	EMPTY: 'EMPTY',
	INVALID: 'INVALID'
}
const { VALID, EMPTY, INVALID } = VALIDATION_TYPES

export const intitialStepTwoValidations = {
	validations: {
		name: EMPTY,
		decimals: EMPTY,
		ticker: EMPTY
	}
}

export const initialStepTwoValues = {
	token: {
		name: '',
		supply: 0,
		ticker: '',
		decimals: '',
		reservedTokens: [],
		reservedTokensElements: [],
		reservedTokensInput: {dim: "tokens"}
	}
}

export const intitialStepThreeValidations = {
	validations: [{
		tier: VALID,
		startTime: VALID,
		endTime: VALID,
		walletAddress: EMPTY,
		supply: VALID,
		rate: EMPTY
	}]
}

export const initialStepThreeValues = {
	crowdsale: [{
		tier: '',
		startTime: '',
		endTime: '',
		walletAddress: '',
		supply: ''
	}]
}



export const DOWNLOAD_NAME = 'contractInfo'
export const DOWNLOAD_TYPE = 'text/plain'
