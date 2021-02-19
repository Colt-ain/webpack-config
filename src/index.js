import './styles/index.scss'

const elvenShieldRecipe = {
	leatherStrips: 2,
	ironIngot: 1,
	refinedMoonstone: 4,
};

const elvenGauntRecipe = {
	...elvenShieldRecipe,
	leather: 1,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntRecipe);
