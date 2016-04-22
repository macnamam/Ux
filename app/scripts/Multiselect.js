import React from 'react';
import Select from 'react-select';
import EventBus from './EventBus';
import JsonTable from 'react-json-table';

const STATES = [
	{ label: 'All', value: 'ALL' },
	{ label: 'State', value: 'STA' },
];

const YEARS = [
	{ label: '2013 Top 10', value: '2013top' },
	{ label: '2013 Bottom 10', value: '2013bottom' },
	{ label: '2014 Top 10', value: '2014top' },
	{ label: '2014 Bottom 10', value: '2014bottom' },
	{ label: '2015 Top 10', value: '2015top' },
	{ label: '2015 Bottom 10', value: '2015bottom' },
];

const PROCEDURES = [
	{ label: '039 - EXTRACRANIAL PROCEDURES W/O CC/MCC', value: '39' },
	{ label: '057 - DEGENERATIVE NERVOUS SYSTEM DISORDERS W/O MCC&', value: '57' },
	{ label: '064 - INTRACRANIAL HEMORRHAGE OR CEREBRAL INFARCTION W MCC', value: '64' },
	{ label: '065 - INTRACRANIAL HEMORRHAGE OR CEREBRAL INFARCTION W CC', value: '65' },
	{ label: '066 - INTRACRANIAL HEMORRHAGE OR CEREBRAL INFARCTION W/O CC/MCC', value: '66' },
	{ label: '069 - TRANSIENT ISCHEMIA', value: '69' },
	{ label: '074 - CRANIAL & PERIPHERAL NERVE DISORDERS W/O MCC', value: '74' },
	{ label: '101 - SEIZURES W/O MCC', value: '101' },
	{ label: '149 - DYSEQUILIBRIUM', value: '149' },
	{ label: '176 - PULMONARY EMBOLISM W/O MCC', value: '176' },
	{ label: '177 - RESPIRATORY INFECTIONS & INFLAMMATIONS W MCC', value: '177' },
	{ label: '178 - RESPIRATORY INFECTIONS & INFLAMMATIONS W CC', value: '178' },
	{ label: '189 - PULMONARY EDEMA & RESPIRATORY FAILURE', value: '189' },
	{ label: '190 - CHRONIC OBSTRUCTIVE PULMONARY DISEASE W MCC', value: '190' },
	{ label: '191 - CHRONIC OBSTRUCTIVE PULMONARY DISEASE W CC', value: '191' },
	{ label: '192 - CHRONIC OBSTRUCTIVE PULMONARY DISEASE W/O CC/MCC', value: '192' },
	{ label: '193 - SIMPLE PNEUMONIA & PLEURISY W MCC', value: '193' },
	{ label: '194 - SIMPLE PNEUMONIA & PLEURISY W CC', value: '194' },
	{ label: '195 - SIMPLE PNEUMONIA & PLEURISY W/O CC/MCC', value: '195' },
	{ label: '202 - BRONCHITIS & ASTHMA W CC/MCC', value: '202' },
	{ label: '203 - BRONCHITIS & ASTHMA W/O CC/MCC', value: '203' },
	{ label: '207 - RESPIRATORY SYSTEM DIAGNOSIS W VENTILATOR SUPPORT 96+ HOURS', value: '207' },
	{ label: '208 - RESPIRATORY SYSTEM DIAGNOSIS W VENTILATOR SUPPORT <96 HOURS', value: '208' },
	{ label: '238 - MAJOR CARDIOVASC PROCEDURES W/O MCC', value: '238' },
	{ label: '243 - PERMANENT CARDIAC PACEMAKER IMPLANT W CC', value: '243' },
	{ label: '244 - PERMANENT CARDIAC PACEMAKER IMPLANT W/O CC/MCC', value: '244' },
	{ label: '246 - PERC CARDIOVASC PROC W DRUG-ELUTING STENT W MCC OR 4+ VESSELS/STENTS', value: '246' },
	{ label: '247 - PERC CARDIOVASC PROC W DRUG-ELUTING STENT W/O MCC', value: '247' },
	{ label: '249 - PERC CARDIOVASC PROC W NON-DRUG-ELUTING STENT W/O MCC', value: '249' },
	{ label: '251 - PERC CARDIOVASC PROC W/O CORONARY ARTERY STENT W/O MCC', value: '251' },
	{ label: '252 - OTHER VASCULAR PROCEDURES W MCC', value: '252' },
	{ label: '253 - OTHER VASCULAR PROCEDURES W CC', value: '253' },
	{ label: '254 - OTHER VASCULAR PROCEDURES W/O CC/MCC', value: '254' },
	{ label: '280 - ACUTE MYOCARDIAL INFARCTION, DISCHARGED ALIVE W MCC', value: '280' },
	{ label: '281 - ACUTE MYOCARDIAL INFARCTION, DISCHARGED ALIVE W CC', value: '281' },
	{ label: '282 - ACUTE MYOCARDIAL INFARCTION, DISCHARGED ALIVE W/O CC/MCC', value: '282' },
	{ label: '286 - CIRCULATORY DISORDERS EXCEPT AMI, W CARD CATH W MCC', value: '286' },
	{ label: '287 - CIRCULATORY DISORDERS EXCEPT AMI, W CARD CATH W/O MCC', value: '287' },
	{ label: '291 - HEART FAILURE & SHOCK W MCC', value: '291' },
	{ label: '292 - HEART FAILURE & SHOCK W CC', value: '292' },
	{ label: '293 - HEART FAILURE & SHOCK W/O CC/MCC', value: '293' },
	{ label: '300 - PERIPHERAL VASCULAR DISORDERS W CC', value: '300' },
	{ label: '301 - PERIPHERAL VASCULAR DISORDERS W/O CC/MCC', value: '301' },
	{ label: '303 - ATHEROSCLEROSIS W/O MCC', value: '303' },
	{ label: '305 - HYPERTENSION W/O MCC', value: '305' },
	{ label: '308 - CARDIAC ARRHYTHMIA & CONDUCTION DISORDERS W MCC', value: '308' },
	{ label: '309 - CARDIAC ARRHYTHMIA & CONDUCTION DISORDERS W CC', value: '309' },
	{ label: '310 - CARDIAC ARRHYTHMIA & CONDUCTION DISORDERS W/O CC/MCC', value: '310' },
	{ label: '312 - SYNCOPE & COLLAPSE', value: '312' },
	{ label: '313 - CHEST PAIN', value: '313' },
	{ label: '314 - OTHER CIRCULATORY SYSTEM DIAGNOSES W MCC', value: '314' },
	{ label: '315 - OTHER CIRCULATORY SYSTEM DIAGNOSES W CC', value: '315' },
	{ label: '329 - MAJOR SMALL & LARGE BOWEL PROCEDURES W MCC', value: '329' },
	{ label: '330 - MAJOR SMALL & LARGE BOWEL PROCEDURES W CC', value: '330' },
	{ label: '372 - MAJOR GASTROINTESTINAL DISORDERS & PERITONEAL INFECTIONS W CC', value: '372' },
	{ label: '377 - G.I. HEMORRHAGE W MCC', value: '377' },
	{ label: '378 - G.I. HEMORRHAGE W CC', value: '378' },
	{ label: '379 - G.I. HEMORRHAGE W/O CC/MCC', value: '379' },
	{ label: '389 - G.I. OBSTRUCTION W CC', value: '389' },
	{ label: '390 - G.I. OBSTRUCTION W/O CC/MCC', value: '390' },
	{ label: '391 - ESOPHAGITIS, GASTROENT & MISC DIGEST DISORDERS W MCC', value: '391' },
	{ label: '392 - ESOPHAGITIS, GASTROENT & MISC DIGEST DISORDERS W/O MCC', value: '392' },
	{ label: '394 - OTHER DIGESTIVE SYSTEM DIAGNOSES W CC', value: '394' },
	{ label: '418 - LAPAROSCOPIC CHOLECYSTECTOMY W/O C.D.E. W CC', value: '418' },
	{ label: '419 - LAPAROSCOPIC CHOLECYSTECTOMY W/O C.D.E. W/O CC/MCC', value: '419' },
	{ label: '439 - DISORDERS OF PANCREAS EXCEPT MALIGNANCY W CC', value: '439' },
	{ label: '460 - SPINAL FUSION EXCEPT CERVICAL W/O MCC', value: '460' },
	{ label: '469 - MAJOR JOINT REPLACEMENT OR REATTACHMENT OF LOWER EXTREMITY W MCC', value: '469' },
	{ label: '470 - MAJOR JOINT REPLACEMENT OR REATTACHMENT OF LOWER EXTREMITY W/O MCC', value: '470' },
	{ label: '473 - CERVICAL SPINAL FUSION W/O CC/MCC', value: '473' },
	{ label: '480 - HIP & FEMUR PROCEDURES EXCEPT MAJOR JOINT W MCC', value: '480' },
	{ label: '481 - HIP & FEMUR PROCEDURES EXCEPT MAJOR JOINT W CC', value: '481' },
	{ label: '482 - HIP & FEMUR PROCEDURES EXCEPT MAJOR JOINT W/O CC/MCC', value: '482' },
	{ label: '491 - BACK & NECK PROC EXC SPINAL FUSION W/O CC/MCC', value: '491' },
	{ label: '536 - FRACTURES OF HIP & PELVIS W/O MCC', value: '536' },
	{ label: '552 - MEDICAL BACK PROBLEMS W/O MCC', value: '552' },
	{ label: '563 - FX, SPRN, STRN & DISL EXCEPT FEMUR, HIP, PELVIS & THIGH W/O MCC', value: '563' },
	{ label: '602 - CELLULITIS W MCC', value: '602' },
	{ label: '603 - CELLULITIS W/O MCC', value: '603' },
	{ label: '638 - DIABETES W CC', value: '638' },
	{ label: '640 - MISC DISORDERS OF NUTRITION,METABOLISM,FLUIDS/ELECTROLYTES W MCC', value: '640' },
	{ label: '641 - MISC DISORDERS OF NUTRITION,METABOLISM,FLUIDS/ELECTROLYTES W/O MCC', value: '641' },
	{ label: '682 - RENAL FAILURE W MCC', value: '682' },
	{ label: '683 - RENAL FAILURE W CC', value: '683' },
	{ label: '684 - RENAL FAILURE W/O CC/MCC', value: '684' },
	{ label: '689 - KIDNEY & URINARY TRACT INFECTIONS W MCC', value: '689' },
	{ label: '690 - KIDNEY & URINARY TRACT INFECTIONS W/O MCC', value: '690' },
	{ label: '698 - OTHER KIDNEY & URINARY TRACT DIAGNOSES W MCC', value: '698' },
	{ label: '699 - OTHER KIDNEY & URINARY TRACT DIAGNOSES W CC', value: '699' },
	{ label: '811 - RED BLOOD CELL DISORDERS W MCC', value: '811' },
	{ label: '812 - RED BLOOD CELL DISORDERS W/O MCC', value: '812' },
	{ label: '853 - INFECTIOUS & PARASITIC DISEASES W O.R. PROCEDURE W MCC', value: '853' },
	{ label: '870 - SEPTICEMIA OR SEVERE SEPSIS W MV 96+ HOURS', value: '870' },
	{ label: '871 - SEPTICEMIA OR SEVERE SEPSIS W/O MV 96+ HOURS W MCC', value: '871' },
	{ label: '872 - SEPTICEMIA OR SEVERE SEPSIS W/O MV 96+ HOURS W/O MCC', value: '872' },
	{ label: '885 - PSYCHOSES', value: '885' },
	{ label: '897 - ALCOHOL/DRUG ABUSE OR DEPENDENCE W/O REHABILITATION THERAPY W/O MCC', value: '897' },
	{ label: '917 - POISONING & TOXIC EFFECTS OF DRUGS W MCC', value: '917' },
	{ label: '918 - POISONING & TOXIC EFFECTS OF DRUGS W/O MCC', value: '918' },
	{ label: '948 - SIGNS & SYMPTOMS W/O MCC', value: '948' },
];

const TableItems = [
{"City":"SACRAMENTO","coordinates":"38.5816, -121.494","data":10,"total":146892},
{"City":"EASTON","coordinates":"38.7743, -76.0763","data":9,"total":116349.84},
{"City":"EASTON","coordinates":"40.6884, -75.2207","data":8,"total":116349.84},
{"City":"SAINT HELENA","coordinates":"38.5052, -122.47","data":7,"total":105929.47},
{"City":"BURBANK","coordinates":"34.1808, -118.309","data":6,"total":101282.03},
{"City":"BROOKSVILLE","coordinates":"28.5553, -82.3879","data":5,"total":98982.945},
{"City":"HOT SPRINGS","coordinates":"34.5037, -93.0552","data":4,"total":98388.78},
{"City":"REDWOOD CITY","coordinates":"37.4852, -122.236","data":3,"total":94693.84},
{"City":"STANFORD","coordinates":"37.4241, -122.166","data":2,"total":90836.484},
{"City":"PALM SPRINGS","coordinates":"33.8303, -116.545","data":1,"total":88175}
]

var ModTable=[];
$.map(TableItems, function( val, i ) {
                  ModTable[i] = {}
                  ModTable[i]['Rank'] = i+1;
                  ModTable[i]['City'] = val['City'];
                  ModTable[i]['Cost'] = val['total'];
});



var MultiSelectField = React.createClass({
	displayName: 'MultiSelectField',
	propTypes: {
		label: React.PropTypes.string,
	},
	getInitialState () {
		return {
			disabled: false,
			statedisabled: false,
			crazy: false,
			options_State: STATES,
			options_Year:YEARS,
			options: PROCEDURES,
			// dropdownstate: [],
			// dropdownval: [],
		};
	},
	componentDidMount() {

	},

	checkValPreLoading(){
		if (this.state.dropdownstate&&this.state.dropdownyear&&this.state.dropdownval){
			console.log("Lets start loading....");
			EventBus.emit('LoadData2json', [this.state.dropdownstate,this.state.dropdownyear,this.state.dropdownval]);
				// EventBus.emit('LoadData2json', [this.state.dropdownstate]);
		}
		else{
			console.log("More Information is Required...");
		}
	},

	handleSelectChangeState (value) {

		EventBus.emit('selectItem', value);
		this.setState({
			dropdownstate: value,
		},function() {
			this.checkValPreLoading();
		});
	},

	handleSelectChangeYear (value) {

		EventBus.emit('selectItem', value);
		this.setState({
			dropdownyear: value,
			},function() {
				this.checkValPreLoading();
			});
	},

	handleSelectChange (value) {

		EventBus.emit('selectItem', value);
		this.setState({
		dropdownval: value,
		},function() {
			this.checkValPreLoading();
		});
	},

	toggleDisabled (e) {
		this.setState({ disabled: e.target.checked });
	},

	render () {
		return (
			<div className="section">
				<h3 className="section-heading">Make a Selection</h3>

				<Select simpleValue disabled={this.state.statedisabled} value={this.state.dropdownstate} placeholder="Select a State" options={this.state.options_State} onChange={this.handleSelectChangeState}/>
				<br/>
    		<Select simpleValue disabled={this.state.disabled} value={this.state.dropdownyear} placeholder="Select a Year" options={this.state.options_Year} onChange={this.handleSelectChangeYear} />
		<br/>
		<Select simpleValue disabled={this.state.disabled} value={this.state.dropdownval} placeholder="Select a medical Procedure" options={this.state.options} onChange={this.handleSelectChange} />
		<br/>
		<div className="ui secondary segment">


		<JsonTable rows={ModTable} />
		</div>
	</div>

		);
	}
});




module.exports = MultiSelectField;
