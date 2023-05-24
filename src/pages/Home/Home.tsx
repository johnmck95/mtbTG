import Output from '../../components/Output/Output';
import Form from '../../components/Form/Form';
import { Box } from '@chakra-ui/react';
import TzouPhoto from '../../images/tzouhaleum_high_res.jpg';
import { ChangeEvent, useEffect, useState } from 'react';
import Algorithm from '../../algorithms/Algorithm/Algorithm';
import {
	HandleRiderConversionProps,
	HandleBikeConversionProps,
} from '../../types/interfaces';
import { SessionStorageKeys } from '../../types/enums';

export default function Home(): JSX.Element {
	const [imperialRider, setImperialRider] = useState(typeSafeImperialRider());
	const [imperialBike, setImperialBike] = useState(typeSafeImperialBike());
	const [reRender, setReRender] = useState(0);
	const [formCompleted, setFormComplete] = useState(typeSafeFormCompleted());
	const [inputs, setInputs] = useState(typeSafeInputs());

	function typeSafeInputs() {
		let input = {
			heightFeet: '',
			heightInches: '',
			heightCM: '',
			weightLB: '',
			weightKG: '',
			handling: '',
			skillLevel: '',
			reachInches: '',
			reachMM: '',
			stackInches: '',
			stackMM: '',
			bikeType: '',
		};
		const sessionStor = sessionStorage.getItem(SessionStorageKeys.inputs);
		if (sessionStor !== null) input = JSON.parse(sessionStor);
		return input;
	}

	function typeSafeImperialRider() {
		let impRider = true;
		const sessionStor = sessionStorage.getItem(SessionStorageKeys.impRider);
		if (sessionStor !== null) impRider = JSON.parse(sessionStor);
		return impRider;
	}

	function typeSafeImperialBike() {
		let impBike = false;
		const sessionStor = sessionStorage.getItem(SessionStorageKeys.impBike);
		if (sessionStor !== null) impBike = JSON.parse(sessionStor);
		return impBike;
	}

	function typeSafeFormCompleted() {
		let formComp = false;
		const sessionStor = sessionStorage.getItem(SessionStorageKeys.formComp);
		if (sessionStor !== null) formComp = JSON.parse(sessionStor);
		return formComp;
	}

	useEffect(() => {
		sessionStorage.setItem(SessionStorageKeys.inputs, JSON.stringify(inputs));
	}, [inputs]);

	useEffect(() => {
		sessionStorage.setItem(
			SessionStorageKeys.impRider,
			JSON.stringify(imperialRider),
		);
	}, [imperialRider]);

	useEffect(() => {
		sessionStorage.setItem(
			SessionStorageKeys.impBike,
			JSON.stringify(imperialBike),
		);
	}, [imperialBike]);

	useEffect(() => {
		sessionStorage.setItem(
			SessionStorageKeys.formComp,
			JSON.stringify(formCompleted),
		);
	}, [formCompleted]);

	/* Updates state from an <input> change from Form.tsx */
	function handleChange(
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
	): void {
		const { name, value } = event.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}

	/* Updates state based on the 'CustomRadioComponent' */
	function handleCustomComponent(name: string, value: string): void {
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}

	/* Updates state for metric/imperial rider conversions */
	function handleRiderConversion({
		heightCMCalc,
		heightFootCalc,
		heightInchesCalc,
		weightKGCalc,
		weightLBCalc,
	}: HandleRiderConversionProps): void {
		setInputs((prevInputs) => ({
			...prevInputs,
			heightCM: heightCMCalc !== -1 ? heightCMCalc.toFixed(4) : inputs.heightCM,
			heightFeet:
				heightFootCalc !== -1 ? heightFootCalc.toFixed(0) : inputs.heightFeet,
			heightInches:
				heightInchesCalc !== -1
					? heightInchesCalc.toFixed(4)
					: inputs.heightInches,
			weightKG: weightKGCalc !== -1 ? weightKGCalc.toFixed(4) : inputs.weightKG,
			weightLB: weightLBCalc !== -1 ? weightLBCalc.toFixed(4) : inputs.weightLB,
		}));
	}

	/* Updates state for metric/imperial bike conversions */
	function handleBikeConversion({
		reachMMCalc,
		reachInchCalc,
		stackMMCalc,
		stackInchCalc,
	}: HandleBikeConversionProps): void {
		setInputs((prevInputs) => ({
			...prevInputs,
			reachMM: reachMMCalc !== -1 ? reachMMCalc.toFixed(4) : inputs.reachMM,
			reachInches:
				reachInchCalc !== -1 ? reachInchCalc.toFixed(4) : inputs.reachInches,
			stackMM: stackMMCalc !== -1 ? stackMMCalc.toFixed(4) : inputs.stackMM,
			stackInches:
				stackInchCalc !== -1 ? stackInchCalc.toFixed(4) : inputs.stackInches,
		}));
	}

	const outputs = Algorithm(inputs);

	return (
		<Box
			width='100%'
			height='100vh'
			justifyContent='center'
			alignItems='center'
			backgroundImage={TzouPhoto}
			backgroundSize='cover'
			backgroundPosition='center'
			backgroundRepeat='no-repeat'>
			{!formCompleted && (
				<Form
					inputs={inputs}
					imperialRider={imperialRider}
					imperialBike={imperialBike}
					handleImperialRider={() =>
						setImperialRider((prevImperialRider) => !prevImperialRider)
					}
					handleImperialBike={() =>
						setImperialBike((prevImperialBike) => !prevImperialBike)
					}
					handleChange={handleChange}
					handleCustomComponent={handleCustomComponent}
					handleRiderConversion={handleRiderConversion}
					handleBikeConversion={handleBikeConversion}
					handleFormCompletion={() =>
						setFormComplete((prevFormComplete) => !prevFormComplete)
					}
					handleReRender={() => setReRender(() => reRender + 1)}
				/>
			)}
			{formCompleted && (
				<Output
					inputs={inputs}
					outputs={outputs}
					imperialRider={imperialRider}
					imperialBike={imperialBike}
					handleShowForm={() =>
						setFormComplete((prevFormComplete) => !prevFormComplete)
					}
				/>
			)}
		</Box>
	);
}
